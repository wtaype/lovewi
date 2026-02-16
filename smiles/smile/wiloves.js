import { db, auth } from './firebase.js';
import { doc, getDoc, setDoc, deleteDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { getls } from '../widev.js';

const COL = 'wiLoves';
const ref = (id) => doc(db, COL, String(id));

// 🔐 Obtener datos del usuario autenticado desde cache o auth
const getUserData = () => {
  const wiSmile = getls('wiSmile');
  const user = auth.currentUser;
  
  if (!user) return null;
  
  return {
    uid: user.uid,
    email: wiSmile?.email || user.email || '',
    usuario: wiSmile?.usuario || user.displayName || user.email?.split('@')[0] || 'Usuario'
  };
};

export const existe = async (id) => { 
  try { 
    return (await getDoc(ref(id))).exists(); 
  } catch { 
    return false; 
  } 
};

export const buscar = async (id) => {
  try { 
    const s = await getDoc(ref(id)); 
    return s.exists() ? { id, ...s.data() } : null; 
  } catch (e) { 
    console.error('wiLoves.buscar:', e); 
    return null; 
  }
};

// 💾 Guardar con uid, email, usuario automático
export const guardar = async (id, data) => {
  try {
    const userData = getUserData();
    
    if (!userData) {
      console.error('❌ Usuario no autenticado');
      return false;
    }
    
    // ✅ Guardar con TODOS los campos necesarios
    await setDoc(ref(id), {
      ...data,                          // plantilla, nombre, de, para, msg, musica, emoji
      uid: userData.uid,                // ← NUEVO
      email: userData.email,            // ← NUEVO
      usuario: userData.usuario,        // ← NUEVO
      creado: serverTimestamp(),        // ← NUEVO
      actualizado: serverTimestamp(),   // ← NUEVO
      fecha: serverTimestamp()          // Mantener para compatibilidad
    });
    
    console.log(`✅ Guardado en wiLoves: ${id} - ${userData.email}`);
    return id;
  } catch (e) { 
    console.error('wiLoves.guardar:', e); 
    return false; 
  }
};

export const eliminar = async (id) => {
  try { 
    await deleteDoc(ref(id)); 
    console.log(`🗑️ Eliminado de wiLoves: ${id}`);
    return true; 
  } catch (e) { 
    console.error('wiLoves.eliminar:', e); 
    return false; 
  }
};

// 🔄 Actualizar con actualizado timestamp
export const actualizar = async (id, data) => {
  try { 
    await updateDoc(ref(id), {
      ...data,
      actualizado: serverTimestamp()
    }); 
    console.log(`🔄 Actualizado wiLoves: ${id}`);
    return true; 
  } catch (e) { 
    console.error('wiLoves.actualizar:', e); 
    return false; 
  }
};