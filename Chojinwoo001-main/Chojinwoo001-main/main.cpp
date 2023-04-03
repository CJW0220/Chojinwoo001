#include <iostream>
#include <conio.h>

using namespace std;

int main()
	
{
	char key;

	while(true)
	{
		std::cout<<"*"<<std::endl;
		key = getch();
		{
			if(key ==27)
				break;
		}
	}
        return 0;
        
}

