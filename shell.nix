let
  pkgsUnstable = import (fetchTarball "http://nixos.org/channels/nixos-unstable/nixexprs.tar.xz") {};
in
  pkgsUnstable.mkShell {
    buildInputs = [
      pkgsUnstable.nodejs-18_x
    ];
  }
