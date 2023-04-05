import React, { Component } from 'react'
import Link from 'next/link'

const data = [
    {
        name: "Rakesh Saraf",
        designation: "Director",
        email: "rakesh@netaquila.com",
        phone: "98111 02036",
        company: 'Netaquila Solutions Private Limited'
    },
    {
        name: "Mira Saraf",
        designation: "Executive Director",
        email: "mira@netaquila.com",
        phone: "98113 72806",
        company: 'Netaquila Solutions Private Limited'
    },
    {
        name: "Sony Kunwar",
        designation: "Senior Vice President & Director - Innovation",
        email: "skunwar@netaquila.com",
        phone: "99998 03651",
        company: 'Netaquila Solutions Private Limited'
    },
    {
        name: "Atul Pokhriyal",
        designation: "Vice President",
        email: "apokhriyal@netaquila.com",
        phone: "99998 83872",
        company: 'Netaquila Solutions Private Limited'
    },
    {
        name: "Shruti Sood",
        designation: "Vice President - HR & Admin",
        email: "ssood@netaquila.com",
        phone: "99713 02028",
        company: 'Netaquila Solutions Private Limited'
    },
    {
        name: "Ashok Meher",
        designation: "Vice President - Finance & KPO",
        email: "ameher@netaquila.com",
        phone: "98186 46302",
        company: 'Netaquila Solutions Private Limited'
    },
    {
        name: "Ravi Singh",
        designation: "Associate Manager - Accounts",
        email: "rksingh@netaquila.com",
        phone: "90159 61068",
        company: 'Netaquila Solutions Private Limited'
    },
    {
        name: "Rachna Gupta",
        designation: "Shift Manager",
        email: "rgupta@netaquila.com",
        phone: "64 220881794",
        company: 'Netaquila Solutions Private Limited'
    },
    {
        name: "Rajesh Lakhera",
        designation: "Shift Manager",
        email: "rlakera@netaquila.com",
        phone: "9868161952/8368318398",
        company: 'Netaquila Solutions Private Limited'
    },
    {
        name: "Premanand Roy",
        designation: "Shift Manager",
        email: "proy@netaquila.com",
        phone: "98912 34975",
        company: 'Netaquila Solutions Private Limited'
    },
    {
        name: "Byomkesh Mukherjee",
        designation: "Quality Manager",
        email: "bmukherjee@netaquila.com",
        phone: "93542 03950",
        company: 'Netaquila Solutions Private Limited'
    },
    {
        name: "Sandeep Sarkar",
        designation: "Quality Manager",
        email: "ssarkar@netaquila.com",
        phone: "97182 99085",
        company: 'Netaquila Solutions Private Limited'
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
                                    <td width="160" style="vertical-align: middle; text-align: center; padding: 0 20px 0 10px">
										<img width='100' style="border: none;" src="https://www.windsorindia.com/netaquila-logo.png" />
                                    </td>
                                    <td width="1"><hr style='border:0; border-left: 2px solid black; height: 90px;' /></td>
                                    <td width="450" style="vertical-align: middle; text-align: center; padding: 0 10px 0 20px;">
                                        <table cellpadding="0" border="0" style="text-align: left;" align="left">
                                            <tr>
                                                <td><span style='font-weight: bold; font-size: 18px; color: #004aad;'>${sign.name}</span></td>
                                            </tr>
                                            <tr>
                                                <td style='font-size: 14px; color: #004aad; padding: 3px 0;'>${sign.designation}</td>
                                            </tr>
                                            <tr>
                                                <td style='font-size: 14px;font-weight: bold; color: black;'>${sign.company}</td>
                                            </tr>
                                            <tr>
                                                <td style='padding: 4px 0;'>
                                                    <table width="450" cellspacing="0" cellpadding="0" border="0">
                                                        <tr>
                                                            <td style='font-size: 12px;'>
                                                                <span style='color: black;'>P</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='tel:+${sign.phone}'>+${sign.phone}</a>
                                                                <span style='color: black; margin-left: 10px;'>E</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='mailto: ${sign.email}'>${sign.email}</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style='font-size: 12px;'><span style='color: black;'>W</span>: <a style='text-decoration: none; color: inherit;' href='http://www.netaquila.com/'>www.netaquila.com/</a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table style='font-family: Helvetica; margin-top: 30px; font-size: 12px;' width="631" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                                <td>
                                *PRIVACY/CONFIDENTIALITY NOTICE**
                                This e-mail transmission, including any attachments, contains
                                information that may be confidential or privileged. The information is
                                intended for the confidential use of the individual or entity named
                                above. If you are not the intended
                                recipient, be aware that any disclosure, copying, distribution or use of
                                the contents of this information is strictly
                                prohibited. If you have received this e-mail in error, please
                                immediately destroy all electronic and hard copies of the
                                communication, including attachments.</td>
                            </tr>
                        </table>
                    </body>
                </html>
            `


        //     <tr>
        //     <td style='padding-top: 8px;'><a target='_blank' href='${sign.linkedin}'><img style='width: 17px; height: 17px;' src='https://www.windsorindia.com/wp-content/uploads/2023/02/linkedin.png' /></a></td>
        // </tr>

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
                    <Link href="/prism">
                        <a><h1>Prism Signatures Here</h1></a>
                    </Link>
                </div>
				<p>{signatures}</p>
			</div>
		)
	}
}

export default Index