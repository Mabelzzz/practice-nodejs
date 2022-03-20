
#include <unistd.h>

void    putchar(char c)
{
    write(1, &c, 1);
}

void    ft_print_combn(int n)
{
    int nbr[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    int a = 0;
    while (a <= 10 - n)
    {
        
    }
//     {
//         b = a + 1;
//         while (b <= 9)
//         {
//             putchar(a + '0');
//             putchar(b + '0');  
//             if (a != 8)
//                 write(1, ", ", 2);  
//             b++;
//         }
//         a++;
//     }


}
// {
//     int     a;
//     int     b;

//     a = 0;
//     while (a <= 8)
//     {
//         b = a + 1;
//         while (b <= 9)
//         {
//             putchar(a + '0');
//             putchar(b + '0');  
//             if (a != 8)
//                 write(1, ", ", 2);  
//             b++;
//         }
//         a++;
//     }
// }

void    ft_print_combn(int n);
void    putchar(char c);

int     main(void)
{
    ft_print_combn(4);
    return (0);
}