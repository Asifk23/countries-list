import React from 'react'
import { Link } from 'react-router-dom'

const SocialIcons = () => {
    const socialSignIn = [
        { icon: GoogleIcon, url: '' },
        { icon: FbIcon, url: '' },
        { icon: LinkedinIcon, url: '' },
        { icon: twitterIcon, url: '' },
    ]
    return (
        <div className='grid grid-cols-4 gap-2 mt-10'>

            {socialSignIn.map(item => (

                <Link to={item.url} className='flex justify-center items-center border border-2 h-10 w-10  rounded-full  border-primary '>
                    {item.icon}
                </Link>
            ))}

        </div>)
}

export default SocialIcons

export const GoogleIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21.664" height="21.703" viewBox="0 0 21.664 21.703">
    <g id="Icon_" data-name="Icon " transform="translate(0.831 0.856)">
        <rect id="Area_ICON:custom_google_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_" data-name="Area [ICON:custom/google][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]" width="20" height="20" fill="rgba(253,73,198,0.35)" opacity="0" />
        <g id="Icon" transform="translate(-1 -1)">
            <path id="Path" d="M23.139,11.375h-.806v-.042h-9v4h5.652a6,6,0,1,1-1.671-6.48l2.829-2.829a9.965,9.965,0,1,0,3,5.351Z" transform="translate(-2.333 -2.333)" fill="none" stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
            <path id="Path-2" data-name="Path" d="M5.255,8.7l3.3,2.416a6.008,6.008,0,0,1,9.575-2.243l2.839-2.837A10.017,10.017,0,0,0,5.255,8.7Z" transform="translate(-3.098 -2.333)" fill="none" stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
            <path id="Path-3" data-name="Path" d="M14.1,31.379a9.988,9.988,0,0,0,6.729-2.606l-3.107-2.627a6,6,0,0,1-9.283-2.768L5.167,25.9A10.026,10.026,0,0,0,14.1,31.379Z" transform="translate(-3.061 -10.379)" fill="none" stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
            <path id="Path-4" data-name="Path" d="M29.84,16.708h-.808v-.041H20v4.014h5.672a6.041,6.041,0,0,1-2.051,2.8h0L26.727,26.1a9.706,9.706,0,0,0,3.307-7.43A10.066,10.066,0,0,0,29.84,16.708Z" transform="translate(-9.035 -7.709)" fill="none" stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
        </g>
    </g>
</svg>
export const FbIcon = <svg id="Icon_" data-name="Icon " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <rect id="Area_ICON:feather_facebook_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_" data-name="Area [ICON:feather/facebook][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]" width="20" height="20" fill="rgba(253,73,198,0.35)" opacity="0" />
    <g id="Icon" transform="translate(-1 -1)">
        <path id="Path" d="M15,1.667H12.5A4.167,4.167,0,0,0,8.333,5.833v2.5h-2.5v3.334h2.5v6.666h3.334V11.667h2.5L15,8.333H11.667v-2.5A.833.833,0,0,1,12.5,5H15Z" transform="translate(1 1)" fill="none" stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
    </g>
</svg>

export const LinkedinIcon = <svg id="Icon_" data-name="Icon " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <rect id="Area_ICON:feather_linkedin_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_" data-name="Area [ICON:feather/linkedin][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]" width="20" height="20" fill="rgba(253,73,198,0.35)" opacity="0" />
    <g id="Icon" transform="translate(-1 -1)">
        <path id="Path" d="M13.333,6.667a5,5,0,0,1,5,5V17.5H15V11.667a1.667,1.667,0,1,0-3.333,0V17.5H8.333V11.667A5,5,0,0,1,13.333,6.667Z" transform="translate(1 1)" fill="none" stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
        <rect id="Rect" width="3.333" height="10" transform="translate(2.667 8.5)" fill="none" stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
        <circle id="Path-2" data-name="Path" cx="1.667" cy="1.667" r="1.667" transform="translate(2.667 2.667)" fill="none" stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
    </g>
</svg>

export const twitterIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20.001" height="20" viewBox="0 0 20.001 20">
    <g id="Icon_" data-name="Icon " transform="translate(0)">
        <rect id="Area_ICON:feather_twitter_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_" data-name="Area [ICON:feather/twitter][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]" width="20" height="20" fill="rgba(253,73,198,0.35)" opacity="0" />
        <g id="Icon" transform="translate(-1 -1)">
            <path id="Path" d="M19.167,2.5A9.094,9.094,0,0,1,16.55,3.775,3.733,3.733,0,0,0,10,6.275v.833A8.884,8.884,0,0,1,2.5,3.333s-3.333,7.5,4.167,10.834A9.7,9.7,0,0,1,.833,15.833C8.333,20,17.5,15.833,17.5,6.25a3.739,3.739,0,0,0-.067-.692A6.427,6.427,0,0,0,19.167,2.5Z" transform="translate(1 1)" fill="none" stroke="#3e3e3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
        </g>
    </g>
</svg>