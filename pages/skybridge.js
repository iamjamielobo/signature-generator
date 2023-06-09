import React, { Component } from 'react'
import Link from 'next/link'

const data = [
    {
		name: 'Ram Upadhyay',
		designation: 'Co-Founder',
		company: 'Skybridge',
		phone: '91 88285 16942',
		email: 'ram@theskybridge.in'
	}, {
		name: 'Akash Srivastava',
		designation: 'Creative Genius',
		company: 'Skybridge',
		phone: '91 83778 36659',
		email: 'akash@theskybridge.in'
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
                        <table style='font-family: sans-serif; background-color: #101010; background-image: url("https://www.windsorindia.com/signature/white-icon.png"); background-size: 425px; background-repeat: no-repeat; background-position: 315px center;' width="650" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr>
                                    <td width="650" style="vertical-align: middle; text-align: center; padding: 25px 10px 25px 20px;">
                                        <table cellpadding="0" border="0" style="text-align: left;" align="left">
                                            <tr>
                                                <td><span style='font-weight: 450; font-size: 30px; color: #E9E9E9; display: block; padding-bottom: 5px;'>${sign.name}</span></td>
                                            </tr>
                                            <tr>
                                                <td style='font-weight: 300; font-size: 13px; line-height: 18px; color: #E9E9E9; margin-bottom: 30px; display: block;'>${sign.designation} | ${sign.company}</td>
                                            </tr>
                                            <tr>
                                                <td style='font-weight: 300; font-size: 13px; line-height: 18px; color: #E9E9E9; margin-bottom 2px; display: block;'>${sign.email}</td>
                                            </tr>
                                            <tr>
                                                <td style='font-weight: 300; font-size: 13px; line-height: 18px;color: #E9E9E9;'>
                                                    <a style='color: #E9E9E9; text-decoration: none; ' href='http://www.theskybridge.in/'>www.theskybridge.in</a> | <a  target='_blank' style='text-decoration: none; color: #E9E9E9;' href='tel:+${sign.phone}'>+${sign.phone}</a>
                                                </td>
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
                    <Link href="/prism">
                        <a><h1>Skybridge Signatures Here</h1></a>
                    </Link>
                </div>
				<p>{signatures}</p>
			</div>
		)
	}
}

export default Index