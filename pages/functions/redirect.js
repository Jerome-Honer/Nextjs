import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'

export function middleware(state) {   
  const url = NextRequest.nextUrl.clone()   
  if (state === 0) {
    url.pathname = '../outcomes/win.js'
    return NextResponse.redirect(url)   
  } 
  if (state === 1) {
    url.pathname = '../outcomes/lose.js'
    return NextResponse.redirect(url)   
  } 
  if (state === 2) {
    url.pathname = '../outcomes/draw.js'
    return NextResponse.redirect(url)   
  } 
}

