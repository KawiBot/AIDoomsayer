import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const NavbarWrapper = styled.nav`
	background-color: #111;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
`

const NavbarBrand = styled.a`
	font-size: 24px;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: none;
	color: #fff;
	display: flex;
	align-items: center;
	letter-spacing: 3px;

	&:hover {
		color: #0ff;
	}
`

const NavbarLinks = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
`

const NavbarLink = styled.li`
  margin-left: 20px;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  padding 0 30px;

  &:hover {
    color: #0ff;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 3px;
    width: 0%;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }
`

function Navbar() {
	return (
		<NavbarWrapper>
			<NavbarBrand>
				<Link to="/">We are Doomed!</Link>
			</NavbarBrand>
			<NavbarLinks>
				<NavbarLink>
					<Link to="/posts">Posts</Link>
				</NavbarLink>
				<NavbarLink>
					<Link to="/newpost">Create New Post</Link>
				</NavbarLink>
				<NavbarLink>
					<Link to="/about">About</Link>
				</NavbarLink>
			</NavbarLinks>
		</NavbarWrapper>
	)
}

export default Navbar
