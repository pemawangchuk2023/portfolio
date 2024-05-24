"use client"
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'
import { TabsContent } from './ui/tabs'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Solidity</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>NextJS15</li>
                <li>ReactJS</li>
                <li>Ethereum Blockchain</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>University of Nicosia</li>
                <li>University of Croatia</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Decentralised Finance</li>
                <li>NextJS 14</li>
                <li>Bitcoin For Developers</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [isPending, startTransition] = useTransition()
    const [activeTab, setActiveTab] = useState('skills')

    const handleChange = (tab: string) => {
        startTransition(() => {
            setActiveTab(tab)
        })
    }

    const activeTabContent = TAB_DATA.find(tab => tab.id === activeTab)?.content

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/about.png"
                    alt="about"
                    width={410}
                    height={40}
                    className="rounded-lg"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Myself</h2>
                    <p className="text-base lg:text-lg text-justify">
                        I am a fullstack web3 developer, web3 historian. I have built several
                        projects for multiple companies. I have experience working with
                        JavaScript, TypeScript, NodeJS, Solidity, Ethereum Blockchain, MongoDB,
                        ShadCN, HTML, CSS, NextJS15, ReactJS. I am always excited to take up
                        any kind of programming-based projects.
                    </p>
                    <div className="flex flex-row justify-start mt-8 w-full">
                        <TabButton selectTab={handleChange} active={activeTab}>
                            {activeTabContent && (
                                <TabsContent value={activeTab} className="p-4 bg-gray-900 rounded-lg">
                                    {activeTabContent}
                                </TabsContent>
                            )}
                        </TabButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
