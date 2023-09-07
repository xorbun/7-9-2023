/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const rettangolo= function(l1,l2)
                {
                    return l1*l2;
                }
    
    const x =rettangolo(3,4);
    console.log(x);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const nonhocapito= function crazySum(n1,n2)
                    {
                        
                        if(n1===n2)
                        {
                            
                            return (n1+n2)*3;
                        }
                        else
                        {
                            return n1+n2;
                            
                        }
                        
                    }
const val1= parseInt(prompt("primo numero della somma"));
const val2= parseInt(prompt("secondo numero della somma"));
const y= nonhocapito(val1,val2)
console.log(y);


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const replay= function crazyDiff(n1,n2=19)
                        {
                            if(n1>19)
                            {
                                return (n1-n2)*3;
                            }
                            else
                            {
                                return n1-n2;
                            }
                        }
const val3=parseInt(prompt("valore da sottrarre a 19"));
const z= replay(val3);
console.log(z);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const truth= function boundary(n1)
            {
                const boh= n1>=20 && n1<=100 || n1===400;
                if (boh==="true")
                {
                    return boh;
                }
                else if (n1===400)
                {
                    return boh;
                }
                else
                {
                    return boh;
                }
            }
const k=truth(40);
console.log(k);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

function epify(text)
{
    const position=text.indexOf("epicode",0);
    
    if (position!==0)
    {
        const nuova= "EPICODE " + text;
        return nuova;
    }
    else
    {
        return text;
    }
}
const testo=epify("ciao");
console.log(testo);




/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n1)
{
    if(n1%3===0 || n1%7===0)
    {
        console.log("resto=0")
    }
    else
    {
        console.log("presente resto");
    }
}
const a=check3and7(30);
console.log(a);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str)
{
    const splitstring=str.split("");
    const reverseArray=splitstring.reverse();
    const joinArray=reverseArray.join("");
    return joinArray;
}
const b=reverseString("ciao a tutti");
console.log(b);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutstring(text)
{
    const vett=text.split("");
    const vett1=[];
    vett1[0]=vett[0];
    vett1[1]=vett[vett.length-1];
    const join=vett1.join("");
    return join;
}
const c=cutstring("benvenuti");
console.log(c);



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(num4)
{
    const vett2=[];
    for(let i=0;i<num4;i++)
    {
        vett2[i]=Math.floor(Math.random()*11);
        
    }
    return vett2;
}
const d= giveMeRandom(2);
console.log(d);
