import React, { Component } from 'react'

const data = [
	{
		name: 'Akash Srivastava',
		designation: 'Creative Genius',
		company: 'Windsor Specialty Services',
		phone: '91 8377836659',
		email: 'akash.srivastava@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/akash-srivastava-76991422a',
	},
	{
		name: 'Ambrita Banerjee',
		designation: 'Associate Manager - Operations',
		company: 'Windsor Specialty Services',
		phone: '91 95827 00420',
		email: 'ambrita@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/ambrita-banarjee-7135951b0',
	},
	{
		name: 'Ankur Khasnis',
		designation: 'Manager - Marketing',
		company: 'Windsor Specialty Services',
		phone: '91 99300 06179',
		email: 'ankur.khasnis@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/ankurkhasnis',
	},
	{
		name: 'Ashish Aggarwal',
		designation: 'Vice President',
		company: 'Windsor Specialty Services',
		phone: '91 98100 33173',
		email: 'ashish@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/ashish-aggarwal-a2a89943',
	},
	{
		name: 'Ashok Kumar Meher',
		designation: 'Associate Vice President - Finance',
		company: 'Windsor Specialty Services',
		phone: '91 98186 46302',
		email: 'ashok@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/ashok-meher-005a2263',
	},
	{
		name: 'Chetna Dalal',
		designation: 'Executive - HR and Admin',
		company: 'Windsor Specialty Services',
		phone: '91 81306 80833',
		email: 'chetna.dalal@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/chetna-d-8b70b81a0',
	},
	{
		name: 'Jaya Rautela',
		designation: 'Associate Vice President - Logistics and Operations',
		company: 'Windsor Specialty Services',
		phone: '91 98113 68985',
		email: 'jaya@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/jaya-rautela-6034b440',
	},
	{
		name: 'Kawita Kumari',
		designation: 'Senior Manager - Marketing and Strategy',
		company: 'Windsor Specialty Services',
		phone: '91 99102 00746',
		email: 'kawita.kumari@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/kawita-kumari-176b86121',
	},
	{
		name: 'Mira Saraf',
		designation: 'Vice President',
		company: 'Windsor Specialty Services',
		phone: '91 98113 72806',
		email: 'mira@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/mira-saraf-acc-917b39b',
	},
	{
		name: 'Rakesh Saraf',
		designation: 'Director',
		company: 'Windsor Specialty Services',
		phone: '91 98111 02036',
		email: 'rakesh@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/rakesh-saraf-a8b382"',
	},
	{
		name: 'Ram Upadhyay',
		designation: 'Head - Technology Strategy',
		company: 'Windsor Specialty Services',
		phone: '91 88285 16942',
		email: 'ram.upadhyay@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/ramupadhyay55"',
	},
	{
		name: 'Ravi Kumar',
		designation: 'Accounts Officer',
		company: 'Windsor Specialty Services',
		phone: '91 90159 61068',
		email: 'ravi@windsorindia.com',
		linkedin: null,
	},
	{
		name: 'Sandhya Murukan',
		designation: 'Brand Services Manager',
		company: 'Windsor Specialty Services',
		phone: '91 98995 48613',
		email: 'msandhya@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/sandhya-murukan-78713ab1',
	},
	{
		name: 'Shruti Sood',
		designation: 'Associate Vice President - HR and Admin',
		company: 'Windsor Specialty Services',
		phone: '91 99713 02028',
		email: 'shruti@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/shruti-sood-b4657b50',
	},
	{
		name: 'Sony Kunwar',
		designation: 'Senior Vice President',
		company: 'Windsor Specialty Services',
		phone: '91 99998 03651',
		email: 'sony@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/sony-kunwar-54359432',
	},
	{
		name: 'Varsha Patwal',
		designation: 'Manager - Strategic Planning',
		company: 'Windsor Specialty Services',
		phone: '91 87430 80427',
		email: 'varsha@windsorindia.com',
		linkedin: 'https://www.linkedin.com/in/varsha-patwal-ab78ba17b',
	},
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
                        <table style='font-family: Helvetica;' width="811" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr>
                                    <td width="210" style="vertical-align: middle; text-align: center; padding: 0 30px 0 50px">
										<img width='210' style="border: none;" src="https://www.windsordigital.in/assets/img/windsor-speciality-01.png" />
                                    </td>
                                    <td width="1"><hr style='border:0; border-left: 2px solid black; height: 100px;' /></td>
                                    <td width="600" style="vertical-align: middle; text-align: center; padding: 0 0px 0 30px;">
                                        <table cellpadding="0" border="0" style="text-align: left;" align="left">
                                            <tr>
                                                <td><span style='font-weight: bold; font-size: 28.5px; color: #8b69fe;'>${sign.name}</span></td>
                                            </tr>
                                            <tr>
                                                <td style='font-size: 22.2px;font-weight: bold;'>${sign.company}</td>
                                            </tr>
                                            <tr>
                                                <td style='font-size: 23px;'>${sign.designation}</td>
                                            </tr>
                                            <tr>
                                                <td style='padding: 5px 0;'>
                                                    <table width="600" cellspacing="0" cellpadding="0" border="0">
                                                        <tr style='font-size: 10px;'>
                                                            <td style='font-size: 15px;'><span style='color: #f2c201;'>P</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='tel:+${sign.phone}'>+${sign.phone}</a></td>
                                                            <td style='font-size: 15px;'><span style='color: #f2c201;'>E</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='mailto: ${sign.email}'>${sign.email}</a></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style='font-size: 15px;'><span style='color: #f2c201;'>W</span>: <a style='text-decoration: none; color: inherit;' href='https://www.windsorindia.com'>www.windsorindia.com</a></td>
                                            </tr>
                                            <tr>
                                                <td style='padding-top: 10px;'><a target='_blank' href='${sign.linkedin}'><img style='width: 20px; height: 20px;' src='https://www.windsordigital.in/assets/img/LinkedIn.jpg' /></a></td>
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
				<div key={sign.name} >
					<h1 style={{ display: 'flex', alignItems: 'center'}}>{sign.name} <button style={{ marginLeft: '50px'}} onClick={ () => myFunction(html) }>Copy HTML</button></h1>
					<div style={{ marginBottom: '50px' }}>
						{ html }
					</div>
					<div style={{ marginBottom: '50px' }}>
						<iframe width='100%' height='200' srcdoc={ html }></iframe>
					</div>

				</div>
			)
		})

		return (
			<div>
				<p>{signatures}</p>
			</div>
		)
	}
}

export default Index
