const LOGIN = `
	select 
		u.user_id,
		u.user_first_name,
		u.user_last_name,
		u.user_phone_number,
		u.user_role_id,
		r.user_role_name,
		u.user_profile_image,
		u.user_created_at,
		u.user_updated_at,
		u.user_deleted_at
	from users u
	join user_roles r on u.user_role_id = r.user_role_id 
	where u.user_deleted_at is null and u.user_phone_number = $1::varchar and u.user_password = md5($2::varchar)
`

const REGISTER = `
	insert into users ( user_first_name, user_last_name, user_phone_number, user_password, user_role_id, user_profile_image) values
	($1::varchar, $2::varchar, $3::varchar, md5($4::varchar), $5, $6::varchar)
	returning *
`

const CHECK_USER_PHONE = `
	select 
		* 
	from users u
	where u.user_deleted_at is null and u.user_phone_number = $1::varchar
`

const CHECK_USER_ROLE = `
	select 
		*
	from user_roles r
	where r.user_role_deleted_at is null and u.user_role_id = $1
`

export default {
	LOGIN,
	REGISTER,
	CHECK_USER_PHONE,
	CHECK_USER_ROLE,
}
