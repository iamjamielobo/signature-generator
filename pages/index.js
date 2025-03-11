import React, { Component, useState } from 'react'

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
															<td width="380" style="vertical-align: middle; text-align: center; padding: 0 0px 0 20px;">
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
																					<td style=''><a style='color: inherit; font-size: 12px;' target='_blank' href='${linkedin}'>${linkedin}</a></td>
																			</tr>
																	</table>
															</td>
															<td width="110" style="vertical-align: unset; text-align: center; padding: 0;">
																<img width='90' style="border: none;" src='${greatPlaceToWorkImg}' />
															</td>
													</tr>
											</tbody>
									</table>
							</body>
					</html>
			`

		// const htmlTemp1 = `
		// 			<html>
		// 					<body style="margin: 10px 0">
		// 							<table style='font-family: Helvetica;' width="652" cellspacing="0" cellpadding="0" border="0">
		// 									<tbody>
		// 											<tr>
		// 													<td width="140" style="vertical-align: middle; text-align: center; padding: 0 20px 0 10px">
		// 					<img width='110' style="border: none;" src="https://www.windsorindia.com/wp-content/uploads/2022/09/windsor-logo.png" />
		// 													</td>
		// 													<td width="1"><hr style='border:0; border-left: 2px solid black; height: 80px;' /></td>
		// 													<td width="380" style="vertical-align: middle; text-align: center; padding: 0 10px 0 20px;">
		// 															<table cellpadding="0" border="0" style="text-align: left;" align="left">
		// 																	<tr>
		// 																			<td><span style='font-weight: bold; font-size: 18px; color: #8b69fe;'>${name}</span></td>
		// 																	</tr>
		// 																	<tr>
		// 																			<td style='font-size: 14px;font-weight: bold;padding: 4px 0;'>${company}</td>
		// 																	</tr>
		// 																	<tr>
		// 																			<td style='font-size: 14px;'>${designation}</td>
		// 																	</tr>
		// 																	<tr>
		// 																			<td style='padding: 4px 0;'>
		// 																					<table width="380" cellspacing="0" cellpadding="0" border="0">
		// 																							<tr>
		// 																									<td style='font-size: 12px;'><span style='color: #f2c201;'>P</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='tel:+${phone}'>+${phone}</a></td>
		// 																									<td style='font-size: 12px;'><span style='color: #f2c201;'>E</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='mailto: ${email}'>${email}</a></td>
		// 																							</tr>
		// 																					</table>
		// 																			</td>
		// 																	</tr>
		// 																	<tr>
		// 																			<td style='font-size: 12px;'><span style='color: #f2c201;'>W</span>: <a style='text-decoration: none; color: inherit;' href='https://www.windsorindia.com'>www.windsorindia.com</a></td>
		// 																	</tr>
		// 																	<tr>
		// 																			<td style=''><a style='color: inherit; font-size: 12px;' target='_blank' href='${linkedin}'>${linkedin}</a></td>
		// 																	</tr>
		// 															</table>
		// 													</td>
		// 													<td width="1"><hr style='border:0; border-left: 2px solid black; height: 80px;' /></td>
		// 													<td width="140" style="vertical-align: middle; text-align: center; padding: 0 20px 0 40px;">
		// 														<img width='80' style="border: none;" src='${greatPlaceToWorkImg}' />
		// 													</td>
		// 											</tr>
		// 									</tbody>
		// 							</table>
		// 					</body>
		// 			</html>
		// 	`

		// const htmlTemp2 = `
		// 			<html>
		// 					<body style="margin: 10px 0">
		// 							<table style='font-family: Helvetica;border:1px solid #dbdbdb;border-radius: 5px;' width="700" cellspacing="0" cellpadding="0" border="0">
		// 									<tbody>
		// 											<tr>
		// 													<td width="380" style="vertical-align: middle; text-align: center; padding: 15px 0px 15px 10px;">
		// 															<table cellpadding="0" border="0" style="text-align: left;" align="left">
		// 																	<tr>
		// 																			<td><span style='font-weight: bold; font-size: 18px; color: #8b69fe;'>${name}</span></td>
		// 																	</tr>
		// 																	<tr>
		// 																			<td style='font-size: 14px;font-weight: bold;padding: 4px 0;'>${company}</td>
		// 																	</tr>
		// 																	<tr>
		// 																			<td style='font-size: 14px;padding-bottom: 0px;'>${designation}</td>
		// 																	</tr>
		// 																	<tr>
		// 																			<td style='padding: 4px 0;'>
		// 																					<table width="380" cellspacing="0" cellpadding="0" border="0">
		// 																							<tr>
		// 																									<td style='font-size: 12px;'><span style='color: #f2c201;'>P</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='tel:+${phone}'>+${phone}</a></td>
		// 																									<td style='font-size: 12px;'><span style='color: #f2c201;'>E</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='mailto: ${email}'>${email}</a></td>
		// 																							</tr>
		// 																					</table>
		// 																			</td>
		// 																	</tr>
		// 																	<tr>
		// 																			<td style='font-size: 12px;'><span style='color: #f2c201;'>W</span>: <a style='text-decoration: none; color: inherit;' href='https://www.windsorindia.com'>www.windsorindia.com</a></td>
		// 																	</tr>
		// 																	<tr>
		// 																			<td style=''><a style='color: inherit; font-size: 12px;' target='_blank' href='${linkedin}'>${linkedin}</a></td>
		// 																	</tr>
		// 															</table>
		// 													</td>
		// 													<td width="1" style=''><hr style='border:0; border-left: 2px solid #dbdbdb; height: 120px;' /></td>
		// 													<td width="130" style="vertical-align: middle; text-align: center; padding: 0 0px 0 20px;">
		// 														<img width='110' style="border: none;" src="https://www.windsorindia.com/wp-content/uploads/2022/09/windsor-logo.png" />
		// 													</td>
		// 													<td width="120" style="vertical-align: baseline; text-align: center; padding: 0 10px">
		// 															<img width='100' style="border: none;" src='${greatPlaceToWorkImg}' />
		// 													</td>
		// 											</tr>
		// 									</tbody>
		// 							</table>
		// 					</body>
		// 			</html>
		// 	`

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

					<h1 style={{ display: 'flex', alignItems: 'center' }}>
						<button
							onClick={() => myFunction(html)}>
							HTML
						</button>
					</h1>
					<div style={{ marginBottom: '50px' }}>
						{html}
					</div>
				</div>
				{/* <div style={{ marginBottom: '50px' }}>

					<p style={{ fontSize: '21px', fontWeight: 'bold' }}>Option 2</p>

					<div
						width='100%'
						height='150'
						dangerouslySetInnerHTML={{ __html: htmlTemp1 }}></div>
					<h1 style={{ display: 'flex', alignItems: 'center' }}>
						<button
							onClick={() => myFunction(htmlTemp1)}>
							Copy Option 2 HTML
						</button>
					</h1>
					<div style={{ marginBottom: '50px' }}>
						{htmlTemp1}
					</div>
				</div>
				<div style={{ marginBottom: '50px' }}>
					<p style={{ fontSize: '21px', fontWeight: 'bold' }}>Option 3</p>
					<div
						width='100%'
						height='150'
						dangerouslySetInnerHTML={{ __html: htmlTemp2 }}></div>

					<h1 style={{ display: 'flex', alignItems: 'center' }}>
						<button
							onClick={() => myFunction(htmlTemp2)}>
							Copy Option 3 HTML
						</button>
					</h1>
					<div style={{ marginBottom: '50px' }}>
						{htmlTemp2}
					</div>
				</div> */}
			</div>
		)
	}
}

export default Index
