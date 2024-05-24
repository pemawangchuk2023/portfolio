"use client"
import React from 'react';
import AnimatedNumbers from "react-animated-numbers"

interface Achievement {
  prefix?: string;
  metric: string;
  value: number;
  postFix?: string;
}

const achievements: Achievement[] = [
  {
    metric: 'Clients',
    value: 150,
    postFix: '+',
  },
  {
    metric: 'Revenue',
    value: 500000,
    prefix: '$',
  },
  {
    metric: 'Countries',
    value: 50,
    postFix: '+',
  },
  {
    metric: 'Projects Completed',
    value: 1200,
  },
];

const AchievementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={achievement.value}
                locale="en-US"
              />
              {achievement.postFix}
            </h2>
            <p className="text-[#ADB7BE]">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
