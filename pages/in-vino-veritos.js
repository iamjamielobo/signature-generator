import React, { Component } from 'react'
import Link from 'next/link'

const data = [
    {
        "name": "Rakesh Saraf",
        "designation": "Director",
        "phone": "91 98111 02036",
        "email": "rakesh.saraf@invinoveritas.life",
        "linkedin": "https://www.linkedin.com/in/rakesh-saraf-a8b382/",
        "companyUrl": "https://www.invinoveritas.life"
    },
    {
        "name": "Mira Saraf",
        "designation": "Executive Director",
        "phone": "91 98113 72806",
        "email": "mira.saraf@invinoveritas.life",
        "linkedin": "https://www.linkedin.com/in/mira-saraf-acc-917b39b/",
        "companyUrl": "https://www.invinoveritas.life"
    },
    {
        "name": "Sony Kunwar",
        "designation": "Senior Vice President & Director - Innovation",
        "phone": "91 99998 03651",
        "email": "sony.kunwar@invinoveritas.life",
        "linkedin": "https://www.linkedin.com/in/sony-kunwar-54359432/",
        "companyUrl": "https://www.invinoveritas.life"
    },
    {
        "name": "Jaya Rautela",
        "designation": "Vice President - Logistics & Operations",
        "phone": "91 99998 83872",
        "email": "jaya.rautela@invinoveritas.life",
        "linkedin": 'https://www.linkedin.com/in/jaya-rautela-6034b440/',
        "companyUrl": "https://www.invinoveritas.life"
    },
    {
        "name": "Shruti Sood",
        "designation": "Vice President - HR & Admin",
        "phone": "91 99713 02028",
        "email": "shruti.sood@invinoveritas.life",
        "linkedin": "https://www.linkedin.com/in/shruti-sood-b4657b50/",
        "companyUrl": "https://www.invinoveritas.life"
    },
    {
        "name": "Ashok Meher",
        "designation": "Vice President - Finance & KPO",
        "phone": "91 98186 46302",
        "email": "ashok.meher@invinoveritas.life",
        "linkedin": "https://www.linkedin.com/in/ashok-meher-005a2263/",
        "companyUrl": "https://www.invinoveritas.life"
    },
    {
        "name": "Ravi Singh",
        "designation": "Associate Manager - Accounts",
        "phone": "91 90159 61068",
        "email": "ravi.singh@invinoveritas.life",
        "linkedin": "https://www.linkedin.com/in/ravi-singh-05756b52/",
        "companyUrl": "https://www.invinoveritas.life"
    },
    {
        "name": "Ankur Khasnis",
        "designation": "Manager - Marketing",
        "phone": "91 99300 06179",
        "email": "ankur.khasnis@invinoveritas.life",
        "linkedin": "https://www.linkedin.com/in/ankurkhasnis/",
        "companyUrl": "https://www.invinoveritas.life"
    },
    {
        "name": "Rukmini Soni",
        "designation": "Research Analyst",
        "phone": "91 77388 03550",
        "email": "rukmini.soni@invinoveritas.life",
        "linkedin": "https://www.linkedin.com/in/rukmanisoni411/",
        "companyUrl": "https://www.invinoveritas.life"
    }
]

const myFunction = (html) => {
	navigator.clipboard.writeText(html)
}

class Index extends Component {
	render() {
		const signatures = data.map((sign) => {

            const html = `
                <html>
                    <body style="margin: 10px 0">
                        <table style='font-family: Helvetica;' width="631" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr>
                                    <td width="160" style="vertical-align: middle; text-align: center; padding: 0px; border-right: 2px solid #C59000; padding: 10px 20px 10px 10px;">
										<a href='${sign.companyUrl}'><img width='100px' style="border: none;" src="https://windsorindia.com/ivv.jpeg" /></a>
                                    </td>
                                    <td width="450" style="vertical-align: middle; text-align: center; padding: 0 10px 0 20px;">
                                        <table cellpadding="0" border="0" style="text-align: left;" align="left">
                                            <tr>
                                                <td><span style='font-weight: bold; font-size: 14; color: #000;'>${sign.name}</span></td>
                                            </tr>
                                            <tr>
                                                <td style='font-size: 12px; font-weight: bold;padding: 5px 0 8px;'>${sign.designation}</td>
                                            </tr>
                                            <tr>
                                                <td style='padding: 0 0 8px;'>
                                                    <table width="400" cellspacing="0" cellpadding="0" border="0">
                                                        <tr>
                                                            <td style='font-size: 12px;'><span style='color: #5F1436; font-weight: bold;'>P</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='tel:+${sign.phone}'>+${sign.phone}</a></td>
                                                            <td style='font-size: 12px;'><span style='color: #5F1436; font-weight: bold;'>E</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='mailto: ${sign.email}'>${sign.email}</a></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style='font-size: 12px;'><span style='color: #5F1436; font-weight: bold;'>W</span>: <a style='text-decoration: none; color: inherit;' href='${sign.companyUrl}'>${sign.companyUrl}</a></td>
                                            </tr>
                                            <tr>
                                                <td style='padding-top: 8px; ${ sign.linkedin ? '' : 'display: none;' }'><a target='_blank' href='${sign.linkedin}'><img style='width: 17px; height: 17px;' src='https://www.windsorindia.com/wp-content/uploads/2023/02/linkedin.png' /></a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </body>
                </html>
            `

			return (
				<div style={{ padding: '0 50px' }} key={sign.name} >
					<h1 style={{ display: 'flex', alignItems: 'center'}}>{sign.name} <button style={{ marginLeft: '50px'}} onClick={ () => myFunction(html) }>Copy HTML</button></h1>
					<div style={{ marginBottom: '50px' }}>
						{ html }
					</div>
					<div style={{ marginBottom: '50px' }}>
						<div width='100%' height='150' dangerouslySetInnerHTML={{ __html: html }}></div>
					</div>

				</div>
			)
		})

		return (
			<div>
                <div style={{ margin: '50px'}}>
                    <Link href="/">
                        <a><h1>Windsor Signatures Here</h1></a>
                    </Link>
                </div>
				<p>{signatures}</p>
			</div>
		)
	}
}

export default Index
