import {Command} from '@oclif/command'

const sharp = require('sharp')
const glob = require('glob')
const mkdirp = require('mkdirp')
const fs = require('fs')

interface Config {
  directory: string
  dimension: {
    width: number
    height: number
  }
}

const config: Config[] = [
  {
    directory: 'ios/5.5',
    dimension: {
      width: 1242,
      height: 2208,
    },
  },
  {
    directory: 'ios/6.5',
    dimension: {
      width: 1242,
      height: 2688,
    },
  },
  {
    directory: 'ios/12.9',
    dimension: {
      width: 2048,
      height: 2732,
    },
  },
  {
    directory: 'android/phone',
    dimension: {
      width: 1080,
      height: 1920,
    },
  },
]

const outDir = 'generated-screens'

export default class Generate extends Command {
  static description =
    'generate ios and android screenshot variants for all screen in current folder'

  static examples = ['$ store-screens generate']

  async run() {
    const {args, flags} = this.parse(Generate)
    const currentFolder = process.cwd()
    this.log(`generating required out folders`)
    this.log(`scanning files from folder ${currentFolder}`)

    const images: string[] = glob.sync(`${currentFolder}/*.+(png|jpg|jpeg)`)

    const oldImages: string[] = glob.sync(
      `${currentFolder}/${outDir}/**/*.+(png|jpg|jpeg)`,
    )

    oldImages.forEach(old => {
      fs.unlinkSync(old)
      this.log(`removed ${old}`)
    })

    config.forEach(config => {
      const outPath = `${currentFolder}/${outDir}/${config.directory}`
      if (!fs.existsSync(outPath)) {
        mkdirp.sync(outPath)
      }

      // generate screens
      images.forEach(image => {
        const imageName = image.split('/').pop()
        const {
          dimension: {width, height},
        } = config

        const outImagePath = `${outPath}/${imageName}`
        sharp(image)
          .resize(width, height, {
            fit: 'contain',
            background: {r: 0, g: 0, b: 0, alpha: 1},
          })
          .toFile(outImagePath)

        this.log(`generated ${outImagePath}`)
      })
    })
  }
}
