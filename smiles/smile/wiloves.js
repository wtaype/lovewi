import { getls } from '../widev.js';
import { db } from './firebase.js';
import { doc, getDoc, setDoc, getDocs, deleteDoc, updateDoc, increment, collection, query, where, orderBy, serverTimestamp } from 'firebase/firestore';

const COL = 'wiLoves';

export const existe = async (id) => (await getDoc(doc(db, COL, id))).exists();

export const guardar = async ({ id, plantilla, nombre, de, para, msg, musica, emoji }) => {
  const user = getls('wiSmile');
  if (!user) return null;
  if (await existe(id)) return null;
  await setDoc(doc(db, COL, id), {
    plantilla, nombre, de, para, msg,
    musica: musica || '', emoji: emoji !== false,
    visitas: 0, activo: true, anonimo: false,
    uid: user.uid, email: user.email, usuario: user.usuario,
    creado: serverTimestamp(), actualizado: serverTimestamp()
  });
  return id;
};

export const buscar = async (id) => {
  const snap = await getDoc(doc(db, COL, id));
  if (!snap.exists() || !snap.data().activo) return null;
  updateDoc(doc(db, COL, id), { visitas: increment(1) }).catch(() => {});
  return snap.data();
};

export const listar = async (uid) => {
  if (!uid) return [];
  const snap = await getDocs(query(collection(db, COL), where('uid', '==', uid), orderBy('creado', 'desc')));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const editar = async (id, datos) => {
  await updateDoc(doc(db, COL, id), { ...datos, actualizado: serverTimestamp() });
};

export const eliminar = async (id) => deleteDoc(doc(db, COL, id));
export const toggleAct = (id, activo) => editar(id, { activo });