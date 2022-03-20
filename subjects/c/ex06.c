
#include <unistd.h>

void    putchar(char c)
{
    write(1, &c, 1);
}

void    ft_print_comb2(void)
{
    int     a;
    int     b;

    a = 0;
    while (a <= 98)
    {
        b = a + 1;
        while (b <= 99)
        {
            putchar(a / 10 + '0');
            putchar(a % 10 + '0');
            putchar(' ');
            putchar(b / 10 + '0');  
            putchar(b % 10 + '0');
            if (a != 98)
                write(1, ", ", 2);  
            b++;
        }
        a++;
    }
}

void    ft_print_comb2(void);
void    putchar(char c);

int     main(void)
{
    ft_print_comb2();
    return (0);
}