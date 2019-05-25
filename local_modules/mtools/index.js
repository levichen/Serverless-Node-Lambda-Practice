'use strict'

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')

class MTools {
  exec () {
    db.serialize(function () {
      db.run('CREATE TABLE lorem (info TEXT)')

      var stmt = db.prepare('INSERT INTO lorem VALUES (?)')
      for (var i = 0; i < 10; i++) {
        stmt.run('Ipsum ' + i)
      }
      stmt.finalize()

      db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
        console.log(row.id + ': ' + row.info)
      })
    })

    db.close()
  }

  /**
   * @param {string} str
   * @returns {string}
   */
  f1 (str) {
    return ''
  }

  /**
   * @param {Mtools.People} people
   * @returns {Promise<boolean>}
   */
  f2 (people) {
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  }
}

module.exports = MTools
