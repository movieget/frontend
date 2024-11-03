import { getUserPoint } from '../../apis/bookingApi'
import { fetchUserData } from '../../apis/userApi'

export const fetchUserDataAndPoints = async (userId: string | undefined) => {
  const [userData, pointData] = await Promise.all([fetchUserData(), getUserPoint(userId)])
  return { userData, pointData }
}
