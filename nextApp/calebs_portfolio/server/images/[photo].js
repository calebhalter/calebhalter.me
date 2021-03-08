import { response } from 'express'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const {
    query: { photo },
  } = req
  console.log(`${process.env.PWD}/pages/api/images/${photo}`)
  res.sendFile(`${process.env.PWD}/pages/api/images/${photo}`);
}