import React, { createContext, useState } from 'react';
import { IAuthProvider, IContext, IUser } from './types';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();
}
