class Utils {
  static setMoveId =(id)=>sessionStorage.setItem('moveId', id);

  static getMoveId =()=>sessionStorage.getItem('moveId');

  static secToHours(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return +hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  }

}

export default Utils;
