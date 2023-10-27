const e = require('express')
const axios = require('axios')
//--SENTIMANTAL ANAISIS---
const aposToLexForm = require('apos-to-lex-form')
var SpellCorrector = require('spelling-corrector')
const { WordTokenizer, SentimentAnalyzer, PorterStemmer } = require('natural')
const { removeStopwords } = require('stopword')
//-----------
const spellCorrector = new SpellCorrector()
spellCorrector.loadDictionary()
var Analyzer = require('natural').SentimentAnalyzer
var stemmer = require('natural').PorterStemmer
const analyzer = new SentimentAnalyzer('Spanish', stemmer, 'afinn')
//------
//.......

var sentimental = function () {}

sentimental.getAllCommentsAction = (result) => {
    const urlGetCommentsFb =
        'https://graph.facebook.com/' +
        process.env.ID_FACEBOOK +
        '/feed?fields=id,comments&access_token=' +
        process.env.ACCESS_TOKEN

    axios
        .get(urlGetCommentsFb)
        .then(function (response) {
            console.log('CANTIDAD DE COMENTEARIOS -> ' + response.data.data.length) //objeect commet
            const res = response.data.data
            result(null, res)
        })
        .catch(function (error) {
            result(null, error)
            console.log(error)
        })
        .finally(function () {
            // always executed
        })
}

sentimental.makeArrayComments = (arrayComments, result) => {
    const newArrayComments = []
    const newArrayComments2 = []
    let tipo
    //---------------------------------------------------
    for (var i = 0; i < arrayComments.length - 1; i += 1) {
        let objectCommets = {}
        let comments = arrayComments[i].comments
        // console.log('COMMETNS BEFORE IF -> ' + comments)
        if (comments === undefined) {
            console.log('PUBLICACION SIN COMENTARIOS [ID] -> ' + arrayComments[i].id)
        } else {
            console.log('PUBLICACION CON COMENTARIOS [ID] -> ' + arrayComments[i].id)
            objectCommets.id = arrayComments[i].id
            objectCommets.comments = arrayComments[i].comments.data
            newArrayComments.push(objectCommets)
        }
    }
    //---------------------------------------------------
    for (var x = 0; x < newArrayComments.length; x += 1) {
        for (var y = 0; y < newArrayComments[x].comments.length; y += 1) {
            let commentsMesssege = newArrayComments[x].comments[y].message
            const split = commentsMesssege.split(' ')
            //console.log(split)
            const analyzed = analyzer.getSentiment(split)
            // console.log(analyzed)
            const resultRound = Math.round(analyzed)
            //console.log(resultRound)
            if (resultRound >= 1) {
                tipo = 'POSITIVO'
            } // positive
            if (resultRound === 0) {
                tipo = 'NEUTRAL'
            }
            if (resultRound < 0) {
                tipo = 'NEGATIVO'
            }
            const objectFinal = {
                comentario: commentsMesssege,
                categoria: tipo
            }
            newArrayComments2.push(objectFinal)
        }
    }
    result(null, newArrayComments2)
    //---------------------------------------------------
}

module.exports = sentimental
