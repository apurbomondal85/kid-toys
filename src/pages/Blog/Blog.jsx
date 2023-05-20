
import { Accordion } from 'flowbite-react'
import React from 'react'

function Blog() {
    return (
        <div className='w-full md:w-[80%] lg:w-[70%] mx-auto py-16'>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500">
                            1. Access Token: An access token is a credential that is used to access protected resources, such as APIs or services, on behalf of a user or an application.
                        </p>
                        <p className="text-gray-500 mb-1">
                            When a user or application authenticates with a server, typically through a process like username/password authentication or OAuth, the server issues an access token.
                        </p>
                        <p className='text-gray-500'>
                            Access tokens should be stored in a place that is easily accessible by the client-side code, such as memory or a short-lived browser storage mechanism like localStorage or sessionStorage
                        </p>
                        <p className="mb-2 mt-4 text-gray-500">
                            2. Refresh Token: A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires.
                        </p>
                        <p className="mb-4 text-gray-500">
                            When the access token expires, the client can send the refresh token to the authorization server. The authorization server verifies the refresh token and, if valid, issues a new access token.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Compare SQL and NoSQL databases?
                    </Accordion.Title>
                    <Accordion.Content>
                        <strong> SQL:</strong>
                        <p className="mb-2 text-gray-500">
                            1. SQL databases follow a structured, tabular data model. Data is organized into tables with predefined schemas, and relationships between tables are established using foreign keys.
                        </p>
                        <p className="mb-2 text-gray-500">
                            2. SQL databases excel in handling structured data and performing complex queries involving multiple tables.
                        </p>
                        <strong className='mt-6'>NoSQL:</strong>
                        <p className="mb-2 text-gray-500">
                            1. NoSQL databases employ a variety of data models, including key-value pairs, document-oriented, columnar, and graph databases. These models offer flexibility and can handle unstructured or semi-structured data.
                        </p>
                        <p className="mb-2 text-gray-500">
                            2. NoSQL databases are designed for horizontal scalability, allowing them to handle massive amounts of data and high traffic loads.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is express js? What is Nest JS?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500">
                            1. Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and straightforward API for building web applications and APIs. Express.js focuses on being unopinionated, allowing developers to have more control and freedom in structuring their applications.
                        </p>
                        <p className="mb-2 text-gray-500">
                            2. Node.js is an open-source, server-side runtime environment built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside of a web browser, enabling you to develop server-side applications and perform various tasks on the server.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is MongoDB aggregate and how does it work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500">
                            The MongoDB Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                        </p>
                        <p className="mb-2 text-gray-500">
                            The MongoDB aggregate method works by taking an array of pipeline stages as input and processing the data in a sequence of stages. Each stage performs specific operations or transformations on the data, such as filtering, grouping, sorting, and calculating.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    )
}

export default Blog
