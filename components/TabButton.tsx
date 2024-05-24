import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TabButtonProps {
    active: string;
    selectTab: (tab: string) => void;
    children: React.ReactNode;
}

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
    return (
        <Tabs defaultValue={active} className="w-full">
            <TabsList className="flex justify-around bg-gray-800 p-2 rounded-lg">
                <TabsTrigger value="skills" onClick={() => selectTab('skills')} className="p-4 w-1/3 text-center text-lg font-semibold bg-gray-700 hover:bg-gray-600 rounded-md">Skills</TabsTrigger>
                <TabsTrigger value="education" onClick={() => selectTab('education')} className="p-4 w-1/3 text-center text-lg font-semibold bg-gray-700 hover:bg-gray-600 rounded-md">Education</TabsTrigger>
                <TabsTrigger value="certifications" onClick={() => selectTab('certifications')} className="p-4 w-1/3 text-center text-lg font-semibold bg-gray-700 hover:bg-gray-600 rounded-md">Certifications</TabsTrigger>
            </TabsList>
            <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                {children}
            </div>
        </Tabs>
    )
}

export default TabButton
