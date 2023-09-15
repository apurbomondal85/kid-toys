
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Products.css'
import { useEffect, useState } from 'react';
import Product from './Product';
import { Button, Spinner } from 'flowbite-react';
import { useLoaderData } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Products() {
    const [products, setProducts] = useState([])
    const [selectedTab, setSelectedTab] = useState(0);
    // const [open, setOpen] = useState(false);
    const { totalProducts } = useLoaderData(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [loader, setLoader] = useState(true);

    const perItem = 6;
    const totalPage = Math.ceil(totalProducts / perItem);
    const totalItem = [...Array(totalPage).keys()];

    // handle tab select value and get toys
    const handleTabSelect = (index) => {
        const selectedTabValue = tabsData[index].value;
        setSelectedTab(index);

        if (selectedTabValue !== "All") {
            fetch(`https://toys-server-bj56713c8-apurbomondal85.vercel.app/category/${selectedTabValue}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data);
                    setLoader(false)
                })
        }
    }

    // get all toys
    useEffect(() => {
        setLoader(true)
        if (selectedTab == 0) {
            fetch(`https://toys-server-bj56713c8-apurbomondal85.vercel.app/AllToys?page=${currentPage}&limit=${perItem}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                    setLoader(false)
                })
        }
    }, [selectedTab, currentPage])

    const tabsData = [
        { label: 'All', value: 'All' },
        { label: 'Math Toys', value: 'Math Toys' },
        { label: 'Engineering toys', value: 'Engineering toys' },
        { label: 'Language Toys', value: 'Language Toys' },
    ];

    return (
        <div className='py-16' data-aos="fade-right" data-aos-offset="300" data-aos-duration="400" data-aos-easing="ease-in-sine">
            <h2 className="text-center text-purple-700 font-bold text-base lg:text-xl">Products</h2>
            <div className="w-12 lg:w-20 h-1 mx-auto bg-slate-700 mt-2 mb-4"></div>
            <h1 className='text-center text-2xl lg:text-4xl font-bold text-slate-700 mb-12'>Our Products</h1>

            <Tabs onSelect={handleTabSelect} selectedIndex={selectedTab}>
                <TabList className="flex items-center justify-center gap-2 lg:gap-6 mb-8">
                    {tabsData.map((tab, index) => (
                        <Tab className='tab' key={index} data={tab.value}>
                            {tab.label}
                        </Tab>
                    ))}
                </TabList>
                {tabsData.map((tab, index) => (
                    <TabPanel key={index}>
                        {
                            loader
                                ?
                                <div className='h-[927px] w-full flex justify-center items-center'>
                                    {/* <p className='text-purple-700'>Loading...</p> */}
                                    <Spinner
                                        size="xl"
                                    />
                                </div>
                                :
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {
                                        products.map(product => <Product key={product._id} product={product}></Product>)
                                    }
                                </div>
                        }
                    </TabPanel>
                ))}
            </Tabs>
            {/* {
                products.length >= 6 && <div className="flex justify-center mt-8"><Button gradientMonochrome="purple" onClick={() => setOpen(true)} className={`py-1 px-4 ${open ? 'hidden' : 'block'}`}>See all</Button></div>
            } */}
            <div className="flex justify-center items-center mt-12">
                {/* {
                    totalItem.map(number => <Button gradientMonochrome={currentPage === number ? "teal" : "purple"} onClick={() => setCurrentPage(number)} className="rounded-none" key={number}>{number + 1}</Button>)
                } */}
                <ReactPaginate
                    onPageChange={(e) => setCurrentPage(e.selected)}
                    breakLabel={'...'}
                    pageCount={totalPage}
                    nextLabel={<FaArrowRight />}
                    previousLabel={<FaArrowLeft />}
                    renderOnZeroPageCount={null}
                    activeClassName={'activePage'}
                    pageClassName={'page-item'}
                    previousClassName={'control'}
                    nextClassName={'control'}
                    className='flex items-center gap-3 py-2 px-4 text-white font-bold'
                />
            </div>
        </div>
    )
}

export default Products
