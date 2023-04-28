import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
const AboutContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
`

const Introduction = styled.div`
	margin-bottom: 40px;
`

const Quote = styled.div`
	margin: 40px 0;
	font-style: italic;
	font-size: 18px;
	padding: 20px;
	border-left: 5px solid #555;
`

const QuoteAuthor = styled.big`
	display: block;
	margin-top: 10px;
`

const MissionStatement = styled.div`
	margin-bottom: 40px;
`

const FAQ = styled.div`
	margin-bottom: 40px;
`

const Socials = styled.footer`
	margin-top: 40px;
`

function About() {
	return (
		<div>
			<Navbar></Navbar>
			<AboutContainer>
				<Introduction>
					<h1>Introduction:</h1>
					<p>
						My name is Kawika and I am a researcher and writer on Artificial
						Intelligence. With the recent boom in AI I found myself immensely
						intrigued in the shortcomings of such a powerful technology. And the
						seeming carelessness of big tech companies in the name of progress.
						We are giving a child a rocket launcher.
					</p>
				</Introduction>
				<Quote>
					<p>
						"I think we should be very careful about artificial intelligence. If
						I had to guess at what our biggest existential threat is, it's
						probably that. So we need to be very careful...With artificial
						intelligence we're summoning the demon."
					</p>
					<QuoteAuthor>- Elon Musk</QuoteAuthor>
				</Quote>
				<MissionStatement>
					<h2>Mission Statement:</h2>
					<p>
						This website focuses on the harmful effects that Artificial
						Intelligence will have on Humanity as a whole. Creation of
						unregulated Artificial Intelligence will have damning ramifications
						on all of us. I hope to research deeply about this topic, and share
						my findings with you in an entertaining, and meaningful way.
					</p>
					<p>
						There is also a sister website to this one: AISycophant.com. Where I
						explore the benefits of Artificial Intelligence and is a steelman of
						this website. It's important to discuss all angles of AI, so that we
						can create an ethical framework for it to exist in. AI is the next
						step in Humanity's evolution, and I would love to share how that is
						a GOOD thing for us all as well.
					</p>
				</MissionStatement>
				<FAQ>
					<h3>Frequently Asked Questions:</h3>
					<ul>
						<li>What are your qualifications?</li>
						<p>
							I am an independent research on Artificial Intelligence. This
							website is one of many of my research projects in the field.
						</p>
					</ul>
				</FAQ>
				<Socials>
					<h4>Interested in Connecting? Here are my socials:</h4>
					<ul>
						<li>YouTube:</li>
						<li>Twitter:</li>
						<li>Discord:</li>
						<li>Tiktok:</li>
					</ul>
				</Socials>
			</AboutContainer>
		</div>
	)
}

export default About
