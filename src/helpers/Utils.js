class Utils {
  static setMoveIds =(ids)=>sessionStorage.setItem('moveIds', ids);

  static getMoveIds =()=>(sessionStorage.getItem('moveIds') || '').split(",");

  static secToHours(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return +hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  }

}

export default Utils;
