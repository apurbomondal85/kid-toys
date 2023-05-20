
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Products.css'
import { useEffect, useState } from 'react';
import Product from './Product';
import { Button } from 'flowbite-react';

function Products() {
    const [products, setProducts] = useState([])
    const [selectedTab, setSelectedTab] = useState(0);
    const [open, setOpen] = useState(false);

    // handle tab select value and get toys
    const handleTabSelect = (index) => {
        const selectedTabValue = tabsData[index].value;
        setSelectedTab(index);

        if (selectedTabValue !== "All") {
            fetch(`https://toys-server-omega.vercel.app/toys/category/${selectedTabValue}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data);
                })
        }
    }

    // get all toys
    useEffect(() => {
        if (selectedTab == 0) {
            fetch('https://toys-server-omega.vercel.app/toys')
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                })
        }
    }, [selectedTab])

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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                products.slice(0, open ? products.length : 6).map(product => <Product key={product._id} product={product}></Product>)
                            }
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
            {
                products.length >= 6 && <div className="flex justify-center mt-8"><Button gradientMonochrome="purple" onClick={() => setOpen(true)} className={`py-1 px-4 ${open ? 'hidden' : 'block'}`}>See all</Button></div>
            }
        </div>
    )
}

export default Products
