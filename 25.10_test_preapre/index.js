let phoneTab=[
    {
        id:2,
        values:['a','b','c']
    },
    {
        id:3,
        values:['d','e','f']
    },
    {
        id:4,
        values:['g','h','i']
    },
    {
        id:5,
        values:['j','k','l']
    },
    {
        id:6,
        values:['m','n','o']
    },
    {
        id:7,
        values:['p','q','r','s']
    },
    {
        id:8,
        values:['t','u','v']
    },
    {
        id:9,
        values:['w','x','y','z']
    }
];

let digits ="23";
let digits2="";
let digits3="4";

function allPossibleValues(num)
{
    let digits=num.split('');
    let allPossibleValues=[];

    let first;
    let second;

    for(let i=0;i<digits.length-1;i++)
    {
        for(let j=0;j<digits.length;j++)
        {
            if(j>i)
            {       
                for(let k=0; k<phoneTab[digits[i]-2].values.length; k++)
                {   console.log(k);
                    for(let l=0; l<phoneTab[digits[j]-2].values.length; l++)
                    {
                        first=phoneTab[digits[i]-2].values[k];
                        second=phoneTab[digits[j]-2].values[l];
                        allPossibleValues.push(first.concat(second));
                    }
                }
            }
        }
    }
    return allPossibleValues;
}

console.log(allPossibleValues("27"));

// נשאר רק מקרי קיצון אם מכניסים ספרה 1 או ריק