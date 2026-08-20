#include <iostream>
#include <vector>
using namespace std;

int main() {
    int N;
    cin >> N;

    vector<int> v(N);

    for(int i = 0; i < N; i++) {
        cin >> v[i];
    }

    cout << v[0] + v[1] << endl;
    cout << v[N-2] + v[N-1] << endl;

    return 0;
}
   
