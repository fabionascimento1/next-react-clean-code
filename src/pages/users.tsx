'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useGetUsers = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const useGetUsersList = async () => {
    setIsLoading(true)
    const response = await axios.get('https://randomuser.me/api/?results=20')
    setIsLoading(false)
    setData(response.data.results)
  }
  useEffect(() => {
    useGetUsersList()
  }, [])

  return {
    data,
    isLoading
  }

}

export default function Home() {
  const { isLoading, data } = useGetUsers()
  return (
    <>
      {isLoading && data && <div>Carregando...</div>}
      {data?.map((item) => (
        <div key={item.cell}>{item.name.first}</div>
      ))}
    </>
  )
}