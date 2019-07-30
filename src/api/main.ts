import axios from "axios"

/*
* request
* */

export async function apiGetJsonData() {

  const axiosResponse = await axios.get("/data.json")

  return axiosResponse.data as IJsonData
}

/*
* types
* */

export type IJsonDataProperty = IJsonDataIntro | IJsonDataProject | IJsonDataCvSection | IJsonDataArchive

export interface IJsonData {
  "intro":            IJsonDataIntro

  "arrayOfProject":   IJsonDataProject[]

  "arrayOfCvSection": IJsonDataCvSection[]

  "arrayOfArchive":   IJsonDataArchive[]
}

export type KeyOfIJsonData = keyof IJsonData

export interface IJsonDataIntro {
  "text":         string
}

export interface IJsonDataProject {
  "title":            string
  "text":             string
  "arrayOfImageUrl":  string[]
}

export interface IJsonDataCvSection {
  "title":            string
  "arrayOfProject": {
    name:             string
    url:              string
  }[]
}

export interface IJsonDataArchive {
  "imageUrl":         string
  "date":             string
  "title":            string
}