#include <unistd.h>

void    putchar(char c)
{
    write(1, &c, 1);
}

int power_ten(int n) 
{
    int p = 1;
    if (n != 0)
    {
        while (n >= 1)
        {
            p *= 10;
            n--;
        }
        return (p);
    }
    else
    {
        return (1);
    }
}

int count_nbr(int nb)
{
    int c = 0;
    
    while (c <= 10)
    {
        nb = nb / 10;
        c++;
        if ( nb == 0) 
        {
            break;
        }
    }
    return (c);
}

void show_nbr(int nb, int count)
{
    int nb1 = 0;

    while (count >= 1) {
        nb1 = nb / power_ten(count-1);
        putchar(nb1 % 10 + '0');
        count--;
    } 
    putchar('\n');
}

void    ft_putnbr(int nb)
{
    if (nb >= 0 && nb <= 2147483647)
    {
       show_nbr(nb, count_nbr(nb));
    }
    else if (nb < 0 && nb >= -2147483647)
    {
        putchar('-');
        show_nbr(-nb, count_nbr(-nb));
    }
}
