const Layout = ({children, open})=>(
    <>
      <div style={{
        width: open ? 'calc(100% - 250px)' : '100%',
        minHeight: '100vh',
        marginLeft: open ? 250 : 0,
        transition: '0.3s',
        marginTop:85
      }}>
        {children}
      </div>
    </>
  );
  export default Layout;
  