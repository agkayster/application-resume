import './App.css';

function App() {
	return (
		<div className='App'>
			<form className='form'>
				<figure className='zuriFig'>
					<img
						src='	https://internship.zuri.team/static/media/logo.36d2d48a.svg'
						alt='brand logo'
						class='brand-logo'></img>
				</figure>
				<header className='resumeHeader'>
					<h1 className='name'>Ejike Chiboka</h1>
					<p className='address'>No. 8, Lekki Phase 1, Lagos</p>
					<p className='phone'>Phone: 0803456222</p>
					<p className='email'>email: ejike.chiboka@gmail.com</p>
				</header>
				<section className='container'>
					<h3 className='career'>
						<u>CAREER OBJECTIVE</u>
					</h3>
					<hr color='#32a852' />
					<p className='teamPara'>
						I am seeking a team where my experience cannot only
						improve the status of the team <br /> but also learn
						from each member of the team as best as possible.
					</p>
					<hr color='#32a852' />
					<div className='personalAll'>
						<h3 className='personalInfo'>
							<u>PERSONAL INFORMATION</u>
						</h3>
						<hr color='#32a852' />
						<div className="paraPersonal">
							<p className='birth'>
								Date of Birth: April 18, 1890
							</p>
							<p className='age'>Age: 22</p>
							<p className='nickname'>Nickname: Dimex</p>
							<p className='place'>Place of Birth: Ajegunle</p>
							<p className='desired'>Position Desired: M.D</p>
							<p className='status'>Civil Status: Single</p>
							<p className='religion'>Religion: Christian</p>
						</div>
					</div>
					<hr color='#32a852' />
					<div className='eduAll'>
						<h3 className='education'>
							<u>EDUCATIONAL BACKGROUND</u>
						</h3>
						<hr color='#32a852' />
						<h4 className='tertiary'>
							<u>Tertiary Education</u>
						</h4>
						<p className='university'>
							<b>School:</b> University of Owerri, Imo State
						</p>
						<p className='degree'>
							<b>Degree:</b> B-Tech, Computer Science
						</p>
						<p className='graduation'>
							<b>Year of Graduation:</b> 2014
						</p>
						<h4 className='secondary'>
							<u>Secondary Education</u>
						</h4>
						<p className='bariga'>
							<b>School:</b> Bariga High School
						</p>
						<p className='green'>
							<b>House:</b> Green House
						</p>
						<p>
							<b className='yearOfGrad'>Year of Graduation:</b>{' '}
							2007
						</p>
					</div>
					<hr color='#32a852' />
					<div className='workAll'>
						<h3 className='work'>
							<u>WORK EXPERIENCE</u>
						</h3>
						<hr color='#32a852' />
						<div className='allExperience'>
							<p className='nstp'>
								<b>NSTP Practise Teaching</b>
							</p>
							<p className='daycare'>Daycare Center Ogbomosho</p>
							<p>Ilorin, Lagos</p>
						</div>
						<div className='moreExp'>
							<p className='practise'>
								<b>Practise Training</b>
							</p>
							<p className='caytero'>
								Caytero Agbero High School
							</p>
							<p>Obalende, Lagos</p>
						</div>
					</div>
					<hr color='#32a852' />
					<h3 className='hobbies'>
						<u>HOBBIES</u>
					</h3>
					<hr color='#32a852' />
					<div className='allHobbies'>
						<ul className='listHobby'>
							<li>Football </li>
							<li>Swimming </li>
							<li>Reading Books </li>
							<li>Travelling</li>
						</ul>
					</div>
				</section>
			</form>
			<footer className='zuriFooter'>
				<a
					href='https://internship.zuri.team/'
					target='_blank'
					rel='noopener noreferrer'>
					https://internship.zuri.team/
				</a>
			</footer>
		</div>
	);
}

export default App;
