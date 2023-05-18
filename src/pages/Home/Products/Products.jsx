
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Products.css'

function Products() {
    return (
        <div className='py-16'>
            <h2 className="text-center text-purple-700 font-bold text-xl">Products</h2>
            <div className="w-20 h-1 mx-auto bg-slate-700 mt-2 mb-4"></div>
            <h1 className='text-center text-4xl font-bold text-slate-700 mb-12'>Our Products</h1>
            <Tabs>
                <TabList className="flex items-center justify-center gap-6 mb-8">
                    <Tab className='tab'>Math Toys</Tab>
                    <Tab className='tab'>Engineering toys</Tab>
                    <Tab className='tab'>Language Toys</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Products
