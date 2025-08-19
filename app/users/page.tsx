import UserList from './partials/UserList';

export default function UsersPage() {
  return (
    <div className="py-6">
      <h1 className="text-2xl text-center font-bold mb-4">GitHub Users</h1>
      <UserList />
    </div>
  );
}
