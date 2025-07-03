"use client"

import { is } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import captchaLogo from '../../../assets/captcha_icon.svg'

function DiceCaptcha({ onSuccess }: { onSuccess: () => void }) {
  const [message, setMessage] = useState('');
  const [diceNumber, setDiceNumber] = useState<number | null>(null);
  const currentMonth = new Date().getMonth() + 1; // Months are 0-indexed in JavaScript
  const [isRolling, setIsRolling] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(false);

  const handleCheckboxClick = () => {
    const diceRoll = Math.floor(Math.random() * 12) + 1; // Rolling a d12

    // Simulating the dice rolling animation
    setDiceNumber(null);
    setIsRolling(true);
    setMessage('Rolling the dice...');

    // Randomly shuffle numbers to simulate rolling
    const shuffleInterval = setInterval(() => {
      setDiceNumber(Math.floor(Math.random() * 12) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(shuffleInterval);
      setIsRolling(false);
      setDiceNumber(diceRoll);

      // Check if the dice roll is greater than the current month
      if (diceRoll > currentMonth) {
        setIsSuccess(true);
        setMessage('Success! You rolled a number greater than the current month.');
        onSuccess();
      } else {
        setIsSuccess(false);
        setMessage('Verification failed. You must roll a number greater than the current month.');
      }
    }, 1500); // Adjust the timeout as needed for your animation duration
  };

  return (
    <div className="flex flex-col h-16 w-72">
      <div className=" bg-gray-100 border border-gray-300 rounded-md flex flex-row items-center p-4">
        <label className="text-black flex flex-row items-center gap-2">
          {
            isRolling ?
              <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              :
              <button
                onClick={handleCheckboxClick}
                className={twMerge(
                  'bg-white border-slate-300 border-solid border-2 w-8 h-8 rounded-sm animate-pulse',
                  !isSuccess && 'animate-wiggle'
                )}
                disabled={isRolling} // Disable checkbox while rolling the dice
              />
          }
          <span className='text-black leading-none'>
          { isRolling ? "Rolling the dice" : "I'm not a robot"}
          </span>
        </label>
        {
          diceNumber !== null ?
            <div className="flex justify-center items-center ml-auto border-solid rounded-md border-black w-10 h-10 border-2">
              <div className={
                twMerge(
                  'text-black',
                )
              }>
                {
                  diceNumber !== null && <div className="dice-number">
                    {diceNumber}
                  </div>
                }
              </div>
            </div>

            :
            <div className='flex flex-col ml-auto'>
              <Image
                src={captchaLogo}
                alt="captcha logo"
                width={64}
                height={64}
                className='my-[-0.5rem]'
              />
              <span className="text-black text-sm leading-none">Chaoscha</span>
            </div>
        }
      </div>
      <div className="text-sm leading-snug">{message}</div>
    </div>
  );
};


export default DiceCaptcha;
