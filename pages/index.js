import React, { Component, useState } from 'react'

// const data = [
//     {
//         name: 'Akash Srivastava',
//         designation: 'Creative Genius',
//         company: 'Windsor Specialty Services',
//         phone: '91 8377836659',
//         email: 'akash.srivastava@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/akash-srivastava-76991422a'
//     },
//     {
//         name: 'Ambrita Banerjee',
//         designation: 'Associate Manager - Operations',
//         company: 'Windsor Specialty Services',
//         phone: '91 95827 00420',
//         email: 'ambrita@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/ambrita-banarjee-7135951b0'
//     },
//     {
//         name: 'Ankur Khasnis',
//         designation: 'Manager - Marketing',
//         company: 'Windsor Specialty Services',
//         phone: '91 99300 06179',
//         email: 'ankur.khasnis@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/ankurkhasnis'
//     },
//     {
//         name: 'Ashish Aggarwal',
//         designation: 'Vice President',
//         company: 'Windsor Specialty Services',
//         phone: '91 98100 33173',
//         email: 'ashish@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/ashish-aggarwal-a2a89943'
//     },
//     {
//         name: 'Ashok Kumar Meher',
//         designation: 'Associate Vice President - Finance',
//         company: 'Windsor Specialty Services',
//         phone: '91 98186 46302',
//         email: 'ashok@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/ashok-meher-005a2263'
//     },
//     {
//         name: 'Chetna Dalal',
//         designation: 'Executive - HR and Admin',
//         company: 'Windsor Specialty Services',
//         phone: '91 81306 80833',
//         email: 'chetna.dalal@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/chetna-d-8b70b81a0'
//     },
//     {
//         name: 'Jaya Rautela',
//         designation: 'Associate Vice President - Logistics and Operations',
//         company: 'Windsor Specialty Services',
//         phone: '91 98113 68985',
//         email: 'jaya@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/jaya-rautela-6034b440'
//     },
//     {
//         name: 'Kawita Kumari',
//         designation: 'Senior Manager - Marketing and Strategy',
//         company: 'Windsor Specialty Services',
//         phone: '91 99102 00746',
//         email: 'kawita.kumari@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/kawita-kumari-176b86121'
//     },
//     {
//         name: 'Mira Saraf',
//         designation: 'Vice President',
//         company: 'Windsor Specialty Services',
//         phone: '91 98113 72806',
//         email: 'mira@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/mira-saraf-acc-917b39b'
//     },
//     {
//         name: 'Rakesh Saraf',
//         designation: 'Director',
//         company: 'Windsor Specialty Services',
//         phone: '91 98111 02036',
//         email: 'rakesh@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/rakesh-saraf-a8b382"'
//     },
//     {
//         name: 'Ram Upadhyay',
//         designation: 'Head - Technology Strategy',
//         company: 'Windsor Specialty Services',
//         phone: '91 88285 16942',
//         email: 'ram.upadhyay@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/ramupadhyay55"'
//     },
//     {
//         name: 'Ravi Kumar',
//         designation: 'Accounts Officer',
//         company: 'Windsor Specialty Services',
//         phone: '91 90159 61068',
//         email: 'ravi@windsorindia.com',
//         linkedin: null
//     },
//     {
//         name: 'Sandhya Murukan',
//         designation: 'Brand Services Manager',
//         company: 'Windsor Specialty Services',
//         phone: '91 98995 48613',
//         email: 'msandhya@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/sandhya-murukan-78713ab1'
//     },
//     {
//         name: 'Shruti Sood',
//         designation: 'Associate Vice President - HR and Admin',
//         company: 'Windsor Specialty Services',
//         phone: '91 99713 02028',
//         email: 'shruti@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/shruti-sood-b4657b50'
//     },
//     {
//         name: 'Sony Kunwar',
//         designation: 'Senior Vice President',
//         company: 'Windsor Specialty Services',
//         phone: '91 99998 03651',
//         email: 'sony@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/sony-kunwar-54359432'
//     },
//     {
//         name: 'Varsha Patwal',
//         designation: 'Manager - Strategic Planning',
//         company: 'Windsor Specialty Services',
//         phone: '91 87430 80427',
//         email: 'varsha@windsorindia.com',
//         linkedin: 'https://www.linkedin.com/in/varsha-patwal-ab78ba17b'
//     }
// ]

const myFunction = (html) => {
    navigator.clipboard.writeText(html)
}

const Input = ({ label, placeholder, onChange }) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }

    return (
        <div>
            {label}
            <br />
            <input
                style={{ margin: '10px 0 20px', width: '500px' }}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    )
}

class Index extends Component {
    state = {
        name: 'Sandhya Murukan',
        email: 'msandhya@windsorindia.com',
        designation: 'Brand Services Manager',
        phone: '91 98995 48613',
        company: 'Windsor Specialty Services',
        linkedin: 'https://www.linkedin.com/in/sandhya-murukan-78713ab1'
    }

    renderInput = ({ label, key, placeholder = '', onChange }) => {
        return (
            <Input
                key={key}
                label={label}
                placeholder={placeholder}
                onChange={onChange}
            />
        )
    }
    render() {
        const { name = '', email = '', phone = '', company = '', linkedin = '', designation = '' } =
            this.state

				const greatPlaceToWorkImg = `https://www.windsorindia.com/wp-content/uploads/2025/03/great-place-to-work-certification-badge.jpeg`

        const html = `
					<html>
							<body style="margin: 10px 0">
									<table style='font-family: Helvetica;' width="651" cellspacing="0" cellpadding="0" border="0">
											<tbody>
													<tr>
															<td width="140" style="vertical-align: middle; text-align: center; padding: 0 20px 0 10px">
							<img width='110' style="border: none;" src="https://www.windsorindia.com/wp-content/uploads/2022/09/windsor-logo.png" />
															</td>
															<td width="1"><hr style='border:0; border-left: 2px solid black; height: 80px;' /></td>
															<td width="380" style="vertical-align: middle; text-align: center; padding: 0 10px 0 20px;">
																	<table cellpadding="0" border="0" style="text-align: left;" align="left">
																			<tr>
																					<td><span style='font-weight: bold; font-size: 18px; color: #8b69fe;'>${name}</span></td>
																			</tr>
																			<tr>
																					<td style='font-size: 14px;font-weight: bold;padding: 4px 0;'>${company}</td>
																			</tr>
																			<tr>
																					<td style='font-size: 14px;'>${designation}</td>
																			</tr>
																			<tr>
																					<td style='padding: 4px 0;'>
																							<table width="380" cellspacing="0" cellpadding="0" border="0">
																									<tr>
																											<td style='font-size: 12px;'><span style='color: #f2c201;'>P</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='tel:+${phone}'>+${phone}</a></td>
																											<td style='font-size: 12px;'><span style='color: #f2c201;'>E</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='mailto: ${email}'>${email}</a></td>
																									</tr>
																							</table>
																					</td>
																			</tr>
																			<tr>
																					<td style='font-size: 12px;'><span style='color: #f2c201;'>W</span>: <a style='text-decoration: none; color: inherit;' href='https://www.windsorindia.com'>www.windsorindia.com</a></td>
																			</tr>
																			<tr>
																					<td style='padding-top: 8px;'><a target='_blank' href='${linkedin}'><img style='width: 17px; height: 17px;' src='https://www.windsorindia.com/wp-content/uploads/2023/02/linkedin.png' /></a></td>
																			</tr>
																	</table>
															</td>
															<td width="130" style="vertical-align: unset; text-align: center; padding: 0 0px 0 20px;">
																<img width='110' style="border: none;" src='${greatPlaceToWorkImg}' />
															</td>
													</tr>
											</tbody>
									</table>
							</body>
					</html>
			`

        const htmlTemp1 = `
					<html>
							<body style="margin: 10px 0">
									<table style='font-family: Helvetica;' width="652" cellspacing="0" cellpadding="0" border="0">
											<tbody>
													<tr>
															<td width="140" style="vertical-align: middle; text-align: center; padding: 0 20px 0 10px">
							<img width='110' style="border: none;" src="https://www.windsorindia.com/wp-content/uploads/2022/09/windsor-logo.png" />
															</td>
															<td width="1"><hr style='border:0; border-left: 2px solid black; height: 80px;' /></td>
															<td width="380" style="vertical-align: middle; text-align: center; padding: 0 10px 0 20px;">
																	<table cellpadding="0" border="0" style="text-align: left;" align="left">
																			<tr>
																					<td><span style='font-weight: bold; font-size: 18px; color: #8b69fe;'>${name}</span></td>
																			</tr>
																			<tr>
																					<td style='font-size: 14px;font-weight: bold;padding: 4px 0;'>${company}</td>
																			</tr>
																			<tr>
																					<td style='font-size: 14px;'>${designation}</td>
																			</tr>
																			<tr>
																					<td style='padding: 4px 0;'>
																							<table width="380" cellspacing="0" cellpadding="0" border="0">
																									<tr>
																											<td style='font-size: 12px;'><span style='color: #f2c201;'>P</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='tel:+${phone}'>+${phone}</a></td>
																											<td style='font-size: 12px;'><span style='color: #f2c201;'>E</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='mailto: ${email}'>${email}</a></td>
																									</tr>
																							</table>
																					</td>
																			</tr>
																			<tr>
																					<td style='font-size: 12px;'><span style='color: #f2c201;'>W</span>: <a style='text-decoration: none; color: inherit;' href='https://www.windsorindia.com'>www.windsorindia.com</a></td>
																			</tr>
																			<tr>
																					<td style='padding-top: 8px;'><a target='_blank' href='${linkedin}'><img style='width: 17px; height: 17px;' src='https://www.windsorindia.com/wp-content/uploads/2023/02/linkedin.png' /></a></td>
																			</tr>
																	</table>
															</td>
															<td width="1"><hr style='border:0; border-left: 2px solid black; height: 80px;' /></td>
															<td width="140" style="vertical-align: middle; text-align: center; padding: 0 20px 0 40px;">
																<img width='80' style="border: none;" src='${greatPlaceToWorkImg}' />
															</td>
													</tr>
											</tbody>
									</table>
							</body>
					</html>
			`

        const htmlTemp2 = `
					<html>
							<body style="margin: 10px 0">
									<table style='font-family: Helvetica;' width="800" cellspacing="0" cellpadding="0" border="0">
											<tbody>
													<tr>
															<td width="380" style="vertical-align: middle; text-align: center; padding: 0 10px 0 20px;">
																	<table cellpadding="0" border="0" style="text-align: left;" align="left">
																			<tr>
																					<td style='width:80%'><span style='font-weight: bold; font-size: 18px; color: #8b69fe;'>${name}</span></td>
																					<td style='width:20%'><a target='_blank' href='${linkedin}'><img style='width: 17px; height: 17px;' src='https://www.windsorindia.com/wp-content/uploads/2023/02/linkedin.png' /></a></td>
																			</tr>
																			<tr>
																					<td style='font-size: 14px;font-weight: bold;padding: 4px 0;'>${company}</td>
																			</tr>
																			<tr>
																					<td style='font-size: 14px;'>${designation}</td>
																			</tr>
																			<tr>
																					<td style='padding: 4px 0;'>
																							<table width="380" cellspacing="0" cellpadding="0" border="0">
																									<tr>
																											<td style='font-size: 12px;'><span style='color: #f2c201;'>P</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='tel:+${phone}'>+${phone}</a></td>
																											<td style='font-size: 12px;'><span style='color: #f2c201;'>E</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='mailto: ${email}'>${email}</a></td>
																									</tr>
																							</table>
																					</td>
																			</tr>
																			<tr>
																					<td style='font-size: 12px;'><span style='color: #f2c201;'>W</span>: <a style='text-decoration: none; color: inherit;' href='https://www.windsorindia.com'>www.windsorindia.com</a></td>
																			</tr>
																	</table>
															</td>
															<td width="1" style='padding-left: 20px;'><hr style='border:0; border-left: 2px solid #dbdbdb; height: 120px;' /></td>
															<td width="130" style="vertical-align: middle; text-align: center; padding: 0 0px 0 20px;">
																<img width='110' style="border: none;" src="https://www.windsorindia.com/wp-content/uploads/2022/09/windsor-logo.png" />
															</td>
															<td width="140" style="vertical-align: middle; text-align: center; padding: 0 0px 0 20px">
																	<img width='110' style="border: none;" src='${greatPlaceToWorkImg}' />
															</td>
													</tr>
											</tbody>
									</table>
							</body>
					</html>
			`

        return (
            <div style={{ padding: '0 50px' }}>
                <div>
                    <h2>Enter your details below</h2>
                    <div style={{ marginTop: '30px' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <Input
                                key='form-key-name'
                                label={'Name'}
                                onChange={(name) => this.setState({ name })}
                                placeholder='Sandhya Murukan'
                            />
                            <Input
                                key='form-key-designation'
                                label={'Designation'}
                                onChange={(designation) =>
                                    this.setState({ designation })
                                }
                                placeholder='Brand Services Manager'
                            />
                            <Input
                                key='form-key-company'
                                label={'Company'}
                                onChange={(company) =>
                                    this.setState({ company })
                                }
                                placeholder='Windsor Specialty Services'
                            />
                            <Input
                                key='form-key-phone'
                                label={'Phone'}
                                onChange={(phone) => this.setState({ phone })}
                                placeholder='91 98995 48613'
                            />
                            <Input
                                key='form-key-email'
                                label={'Email'}
                                onChange={(email) => this.setState({ email })}
                                placeholder='msandhya@windsorindia.com'
                            />
                            <Input
                                key='form-key-linkedin'
                                label={'Linkedin Profile URL'}
                                onChange={(linkedin) =>
                                    this.setState({ linkedin })
                                }
                                placeholder='https://www.linkedin.com/in/sandhya-murukan-78713ab1'
                            />
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: '50px' }}>
                    <div
                        width='100%'
                        height='150'
                        dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
                <div style={{ marginBottom: '50px' }}>
                    <div
                        width='100%'
                        height='150'
                        dangerouslySetInnerHTML={{ __html: htmlTemp1 }}></div>
                </div>
                <div style={{ marginBottom: '50px' }}>
                    <div
                        width='100%'
                        height='150'
                        dangerouslySetInnerHTML={{ __html: htmlTemp2 }}></div>
                </div>
                {/* <h1 style={{ display: 'flex', alignItems: 'center' }}>
                    HTML{' '}
                    <button
                        style={{ marginLeft: '50px' }}
                        onClick={() => myFunction(html)}>
                        Copy HTML
                    </button>
                </h1> */}
                {/* <div style={{ marginBottom: '50px' }}>
						{ html }
					</div> */}
            </div>
        )
        // })

        return (
            <div>
                <div style={{ margin: '50px' }}></div>
                <p>{signatures}</p>
            </div>
        )
    }
}

export default Index
