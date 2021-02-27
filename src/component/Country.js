{app.countries.map((country) => {
    let colSize;

    if (app.countries.length > 4) colSize = 2;
    else colSize = 12 / app.countries.length;

    const countryStyle = `col-${colSize} border rounded bg-light text-center mx-auto`;
    return (
      <div className={countryStyle}>{country.name}</div>
    );
  })}