import { React } from 'react';
import "./MyAccount.css";

export default function MyAccount({ open, onClose }) {

    if(!open) return null

  return (
    <>
    <div className='popup-container'>
        <div className='popup'>
            <button className='close-btn' onClick={onClose}>&#10006;</button>

            <div className='info-container'>
                <div className='btns-container'>
                    <div className='my-pokemonsBtn'>
                        <button>My Pokemons</button>
                    </div>
                    <div className='logout'>
                        <button>Log out</button>
                    </div>
                </div>

            <details className='teams-info valor'>
                <summary>
                    <div className="summary-container">Team Valor
                        <img className="summary-img" src="/Imagenes/Valor.png" />
                    </div>
                </summary>
                <div className='text-container'>
                <p>
                Team Valor relies on strength in battle. Valor's members believe that Pokémon are stronger and more warmhearted than humans and are interested in enhancing their natural power.
                </p>
                </div>
            </details>
            <details className='teams-info instinct'>
                <summary>
                <div className="summary-container">Team Instinct
                        <img className="summary-img" src="/Imagenes/Instinct.png" />
                    </div>
                </summary>
                <div className='text-container'>
                    <p>Team Instinct relies on a trainer's instincts. Instinct's members believe that Pokémon have excellent intuition and are interested in learning more about its connection to the egg hatching process.
                </p>
                </div>
            </details>
            <details className='teams-info mystic'>
                <summary>
                <div className="summary-container">Team Mystic
                        <img className="summary-img" src="/Imagenes/Mystic.png" />
                    </div>
                    
                    </summary>
                <div className='text-container'>
                    <p>Team Mystic relies on analyzing every situation. Mystic's members believe that Pokémon have immeasurable wisdom and are interested in learning more about why Pokémon experience evolution.</p>
                </div>
            </details>
            </div>
        </div>
    </div>
    </>
  )
}
