function swap (x, a, b)
{
    let tmp = x[a]
    x[a] = x[b]
    x[b] = tmp
}

function checkSort(a)
{
    for (let i = 0; i < a.length; i++)
    {
        if (a[i] > a[i+1])
        {
            return false 
        }
    }
    return true
}

function getPermutations (a, index, permutations)
{
    if (index == a.length)
    {
        permutations.push([...a])
        console.log(a)
        if (checkSort(a) == true)
        {
            console.log("found sorted vector '" + a + "' ...")
        }     
    }
    else 
    {
        for (var i = index; i < a.length; i++)
        {
            swap(a, index, i)
            getPermutations(a, index+1, permutations)
            swap(a, index, i)
        } 
    }
    return permutations
}

function permutationSort (a)
{
    let permutations = []
    let perms = getPermutations(a,0, permutations)
    let permAt = 0
    for (permAt; permAt < perms.length; permAt++) 
    {
        if (checkSort(perms[permAt]) == true)
        {
            for (let j = 0; j < perms[permAt].length; j++)
            {
                a[j] = perms[permAt][j]
            }
            return permAt
        } 
    }
}

let arr = [1, 3, 6, 7, 4, 5]
//let arr = [1, 3, 2]
x = permutationSort(arr)
console.log("arr : " + arr  + " after " + x + " permutations")







