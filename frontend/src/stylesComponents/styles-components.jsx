

import styled from 'styled-components';
/**From button theme */
export const BoxTheme = styled('article')`
   

    background-color: ${props => props.bg};
    padding: 10px 10px;
    transition: right,background-color linear 200ms, linear 200ms;
    height: 32px;
    &:hover {
        right:-20px;
    }
    display:flex;
    justify-content:center;
    align-items: flex-start;
    flex-flow:column wrap;
    gap: 20px;
    width: 90px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
     border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;   
`;
export const ButtonThemeOne = styled('button')`
    transition: all linear 200ms;

    font-weight: bold; 
    clip-path:circle(12px);  
    padding: 15px 15px;
    margin-left: 0;
    border:none;
    outline: none;
    background-color:${props => props.bg};
    transform:${props => props.checked ? 'translateX(50px)' : 'translateX(0px)'}
`;

/**From login **/
export const Spinner = styled('img')`
    animation: Rotate linear forwards 2s infinite;
    width: 300px;
    position: absolute;
    @keyframes  Rotate{
        to {
            transfrom: rotate(0deg)
        };
        from {
            transform: rotate(360deg);
        };
    };
`;

export const Msg = styled('p')`
    margin-top: 15px;
    width: ${props => props.width || '200px'};
    padding: 10px 15px;
    color:#Fff;
    background-color: ${props => props.type === '0' ? '#7800ff' : '#48CF76'} ;
    text-align:center;
    animation: FadeIn forwards linear 250ms;
    font-size: 1.2rem;
    @keyframes  FadeIn{
        to {
            opacity: 1;
        };
        from {
            opacity: 0.2;
        };
    }
`;
/**IMAGES STYLEDCOMPONENTS */

export const BGImage = styled('img')`
    position:absolute;
    max-width: 120%;
   
    left:-50px;
    top: -50px;
    background-size: cover;
    object-fit: contain;
    background-size: cover;
    z-index: 0;
    pointer-events:none;
`;

export const LogoutIcon = styled('img')`
    width: 18px;
    filter: invert(100%);
`;



export const MsgRegister = styled('span')`
    background-color: ${props => props.error || '#48CF76'};
    padding: 8px 20px;
    font-family: 'Courier New', Courier, monospace;
    color:#fff;
`;
/**Footer login and register */


export const LoadingSpinner = styled('img')`
    animation: Rotate linear 1000ms;
      @keyframes Rotate {
        to {
                opacity: 1;
            transform: rotate(360deg);
        }
        from {
            
            opacity: 0.5;
        transform: rotate(0deg);
        }
    }

`;

export const FooterS = styled("footer")`
  width: 100%;
  color: #fff;
  height: 70px;
  text-align: center;
  font-weight: bold;
  line-height: 65px;
  margin-top: 20px;
`;
/***
 * For portals
 *
 */

export const Modal = styled('div')`
    position: absolute;
    width: 100%;
    height:100%;
    background-color: #2D40FF;
    background-image: linear-gradient(#01031b,#4d72de);
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    & ~ .remove {
        display:none;
    }
`;
export const Children = styled('section')`
    position:relative;
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;            
    align-items:center; 
    top: 0;
    h2{
        
        margin-left:auto;
        margin-right: auto;
        text-align:center;
     
        font-size: 2rem;
        color:#fff;
        font-weight: 100;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
`;
/****** Users********/

export const CardContent = styled('ol')`
    transition: all linear 300ms;
    list-style: none;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    align-items:flex-start;
    align-content: center;  
    padding: 10px 20px;
    gap: 30px;
    width: 100%;
    height:100%;
`;

export const CardHistory = styled('li')`

    align-self:flex-start;
    width: 100%;
    position:relative;  
    background-color:${props => props.bg};
    flex-wrap: wrap;
    color:${props => props.color};
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    padding: 10px;
   
     .card_content {    
        flex-shrink: 10;
        padding: 10px 5px;
        gap: 10px;
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        
        align-items:flex-start;
        .history_person{
            align-self: center;
            flex-basis: 200px;
            flex-shrink: 10;
            flex-grow: 10;
        }
      
        img{
            max-width: 100%;
            object-fit: contain;
            align-self: flex-start;
            clip-path: circle(100px);
            transition: clip-path linear 200ms;
            
            &:hover {
                clip-path: circle(130px);
                transform: translateX(0px); 
            }
        }
          .name_person{
            align-self: flex-start;
            font-family:Abril;
            font-size: 4rem;
            font-weight: 100; 
            text-align: center;
            
        }
        .content_alive{
            align-self: center;
            
            width: 100%;

        }
    }
  
    &::after {
           background-color: ${props => props.color};
           content: "";
           height: 10px;
           position: absolute;
           left: 0;
           bottom: 0;
        
           width: 200px;
    }


`;



export const ButtonCheck = styled('button')`
    outline:none;
    background-color: ${props => props.bg};
    border: 1px solid ${props => props.color !== "" ? props.color : ""};
    padding: 15px 40px;
    border-radius: 5px;
    color:${props => props.fc ? props.fc : 'gray'};
    font-size: 1rem;
    outline:none;
    display:flex;
    align-items:center;
    gap: 10px;
    &:active {
        animation: JumpButton linear forwards 200ms;
    }

    @keyframes JumpButton {
        to {
            transform: scale(1);
        }
        from {
            transform: scale(1.2);
        }
    }
`;


