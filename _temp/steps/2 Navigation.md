1 Init Navigation component (see commits)

2 Add reactotron:

3 Configuring redux with reactotron and see redux isAuth

- https://docs.infinite.red/reactotron/plugins/redux/
- yarn add reactoron-redux -D

3 filter symbolicate in reactotron

- add msw
- add login response
- add events watching

4 filter symbolicate in msw

- login and see states in Reactotron

6 After reloading all data are empty/rejected

- https://react-native-async-storage.github.io/async-storage/docs/install/
- we lose our autherization every time after relaunching and reloading
- yarn add AsyncStoryge
- add consts for key name
