#!/usr/bin/env node

import moment from 'moment'

main()

function main() {
  let arg = process.argv[2] ? Number(process.argv[2]) : undefined
  arg = arg && arg < 1e10 ? arg * 1e3 : arg

  const timeStr = moment(arg).format('YYYY-MM-DD HH:mm:ss')

  console.log(timeStr)
}
