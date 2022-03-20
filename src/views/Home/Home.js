import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Countries from '../../Components/Countries/Countries'
import Footer from '../../Components/Footer/Footer'
import SocialIcons from '../../Components/Footer/SocialIcons'
import Loader from '../../Components/Loader/Loader'
import { manageCountries } from './CountriesLogic'
import './homeStyle.css'

const Home = () => {
    const [data, setdata] = useState([])
    const [Regions, setRegions] = useState([])
    const [ActiveRegion, setActiveRegion] = useState('All')
    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)
    const [Isloading, setIsloading] = useState(true)
    useEffect(() => {
        GetCountries()
    }, [])


    const GetCountries = () => {
        let path = 'https://restcountries.com/v2/all'
        let params = 'fields=name,region,flag'

        let result = manageCountries('get', '', params, path)
        result.then((res) => {
            console.log({ res })
            if (res.data) {
                setdata(res.data)
                setIsloading(false)
            } else {
                setdata([])
            }

        })
            .catch((err) => {
                console.log({ err })
            })
    }

    let RegionArr = []
    for (let i = 0; i < data.length; i++) {

        RegionArr.push(data[i].region)
    }

    useEffect(() => {
        setRegions([...new Set(RegionArr)])
    }, [data])





    return (
        <>
            {Isloading ?
                <Loader />
                :
                <main className='flex flex-col items-center' style={{ background: '#FBFBFB;' }}>
                    <section className='home-page px-5 md:px-10 xl:px-0 py-10'>
                        <div className="flex justify-between">
                            <div>
                                <h1 className='text-xl capitalize font-semibold '>countries</h1>
                            </div>
                            <div className='nav-links'>
                                <a onClick={() => setActiveRegion('All')} className={ActiveRegion == 'All' ? 'item-link-active mx-2 cursor-pointer font-semibold text-sm' : 'item-link mx-2 cursor-pointer font-semibold text-sm'}>{'All'}</a>

                                {Regions.map(item => (
                                    <a onClick={() => setActiveRegion(item)} className={ActiveRegion == item ? 'item-link-active mx-2 cursor-pointer font-semibold text-sm' : 'item-link mx-2 cursor-pointer font-semibold text-sm'}>{item}</a>
                                ))}
                            </div>
                            <div className="mobile-menu">
                                <button type='button' onClick={() => setisSideMenuOpen(true)}>
                                    <div className='w-7 rounded h-1 bg-primary mb-1'></div>
                                    <div className='w-7 rounded h-1 bg-primary mb-1'></div>
                                    <div className='w-7 rounded h-1 bg-primary mb-1'></div>
                                </button>
                                <div className={isSideMenuOpen ? 'w-72 fixed right-0 top-0 h-screen bg-white shadow-xl translate-x-0  ease-in duration-300 transition' : 'translate-x-full w-72 fixed right-0 top-0 h-screen bg-white shadow-xl  ease-in duration-300 transition'}>
                                    <div>
                                        <button onClick={() => setisSideMenuOpen(false)} className='border border-2 border-primary px-2 py-1 absolute right-5 top-6 m-2 rounded text-xs font-semibold'>close</button>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6 mt-20 px-5">
                                        <a onClick={() => setActiveRegion('All')} className={ActiveRegion == 'All' ? 'w-max item-link-active mx-2 cursor-pointer font-semibold text-sm' : 'w-max item-link mx-2 cursor-pointer font-semibold text-sm'}>{'All'}</a>

                                        {Regions.map(item => (
                                            <a onClick={() => setActiveRegion(item)} className={ActiveRegion == item ? 'w-max item-link-active mx-2 cursor-pointer font-semibold text-sm' : 'w-max item-link mx-2 cursor-pointer font-semibold text-sm'}>{item}</a>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className='grid md:grid-cols-2 gap-5 pt-10  grid-cols-1 '>
                            {data.filter(itm => ActiveRegion == 'All' ? itm : ActiveRegion == itm.region).map(item => (

                                <Countries flag={item.flag} countryName={item.name} region={item.region} />
                            ))}
                        </div>


                    </section>

                    <Footer />
                </main>
            }
        </>
    )
}

export default Home