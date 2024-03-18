import React from 'react';
import Project from '../Project/Project';

import hagerman from '../../assets/projects/hagerman.png';
import mazevo from '../../assets/projects/mazevo.png';
import beck from '../../assets/projects/beck.png';
import frangrowth from '../../assets/projects/frangrowth.png';

//Projects
export const Hagerman = 
<Project 
  image={ hagerman }
  title='Hagerman'
  description='Over a dozen HubDB tables for dynamic pages, a blog, and one heck of a mega menu. Developed while working at Media Junction.'
  tags={['']}
  liveSiteLink='https://www.hagerman.com/' />
export const Mazevo = 
<Project 
  image={ mazevo }
  title='Mazévo'
  description='A modern and colorful redesign. Developed while working at Media Junction.'
  tags={['']}
  liveSiteLink='https://www.gomazevo.com/' />
export const Beck = 
<Project 
  image={ beck }
  title='Beck Technology'
  description='A strategic site for a strategic brand. Developed while working at Media Junction.'
  tags={['']}
  liveSiteLink='https://www.beck-technology.com/'/>
export const Frangrowth = 
<Project 
  image={ frangrowth }
  title='Frangrowth'
  description='A full build from the ground up in Hubspot. Developed while working at Media Junction.'
  tags={['']}
  liveSiteLink='https://www.frangrowth.co/' />

