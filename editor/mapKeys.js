module.exports = {
  _map: [
    "pathData",
    "settings",
    "version",
    "artist",
    "song",
    "author",
    "separateCountdownTime",
    "songFilename",
    "bpm",
    "volume",
    "offset",
    "pitch",
    "hitsound",
    "hitsoundVolume",
    "trackColorType",
    "trackColor",
    "secondaryTrackColor",
    "trackColorAnimDuration",
    "trackColorPulse",
    "trackPulseLength",
    "trackStyle",
    "trackAnimation",
    "beatsAhead",
    "trackDisappearAnimation",
    "beatsBehind",
    "backgroundColor",
    "bgImage",
    "bgImageColor",
    "parallax",
    "bgDisplayMode",
    "lockRot",
    "loopBG",
    "unscaledSize",
    "relativeTo",
    "position",
    "rotation",
    "zoom",
    "bgVideo",
    "loopVideo",
    "vidOffset",
    "floorIconOutlines",
    "stickToFloors",
    "planetEase",
    "planetEaseParts",
    "actions",
  ],
  _pathData: [
    "R",
    "J",
    "E",
    "T",
    "U",
    "G",
    "Q",
    "H",
    "L",
    "N",
    "Z",
    "F",
    "D",
    "B",
    "C",
    "M",
    "5",
    "7",
    "U",
    "!",
  ],
  actions: {
    _eventType: [
      "SetSpeed",
      "Twirl",
      "Checkpoint",
      "CustomBackground",
      "ColorTrack",
      "AnimateTrack",
      "Flash",
      "MoveCamera",
      "SetHitsound",
      "RecolorTrack",
      "MoveTrack",
      "SetFilter",
      "HallOfMirrors",
      "ShakrScreen",
      "SetPlanetRotation",
      "MoveDecorations",
      "RepeatEvents",
    ],
    eventType: {
      _SetSpeed: ["speedType", "beatsPerMinute", "bpmMultiplier"],
      SetSpeed: {
        _speedType: ["Bpm", "Multiplier"],
      },
      _CustomBackground: [
        "color",
        "bgImage",
        "imageColor",
        "parallax",
        "bgDisplayMode",
        "lockRot",
        "loopBG",
        "unscaledSize",
        "angleOffset",
      ],
      CustomBackground: {
        _bgDisplayMode: ["FitToScreen", "Unscaled", "Tiled"],
      },
      _ColorTrack: [
        "trackColorType",
        "trackColor",
        "secondaryTrackColor",
        "trackColorAnimDuration",
        "trackColorPulse",
        "trackStyle",
      ],
      _AnimateTrack: [
        "trackAnimation",
        "beatsAhead",
        "trackDisappearAnimation",
        "beatsBehind",
      ],
      AnimateTrack: {
        _trackAnimation: [
          "None",
          "Assemble",
          "Assemble_Far",
          "Extend",
          "Grow",
          "Grow_Spin",
          "Fade",
        ],
        _trackDisappearAnimation: [
          "None",
          "Scatter",
          "Scatter_Far",
          "Retract",
          "Shrink",
          "Shrink_Spin",
          "Fade",
        ],
      },
      _AddDecoration: [
        "decorationImage",
        "position",
        "relativeTo",
        "pivotOffset",
        "rotation",
        "scale",
        "depth",
        "tag",
      ],
      AddDecoration: {
        _relativeTo: ["Tile", "Global"],
      },
      _Flash: [
        "duration",
        "plane",
        "startColor",
        "startOpacity",
        "endColor",
        "endOpacity",
        "angleOffset",
      ],
      _MoveCamera: [
        "duration",
        "relativeTo",
        "position",
        "rotation",
        "zoom",
        "angleOffset",
        "ease",
      ],
      MoveCamera: {
        _relativeTo: ["Player", "Tile", "Global", "LastPosition"],
      },
      _SetHitsound: ["hitsound", "hitsoundVolume"],
      SetHitsound: {
        _hitsound: ["Hat", "Kick", "Shaker", "Sizzle", "ShakerLoud", "None"],
      },
      _RecolorTrack: [
        "startTile",
        "endTile",
        "trackColorType",
        "trackColor",
        "secondaryTrackColor",
        "trackColorAnimDuration",
        "trackColorPulse",
        "trackPulseLength",
        "trackStyle",
        "angleOffset",
      ],
      RecolorTrack: {
        _$Tile: ["ThisTile", "Start", "End"],
      },
      _MoveTrack: [
        "startTile",
        "endTile",
        "duration",
        "positionOffset",
        "rotationOffset",
        "scale",
        "opacity",
        "angleOffset",
        "ease",
      ],
      MoveTrack: {
        _$Tile: ["ThisTile", "Start", "End"],
      },
      _SetFilter: [
        "filter",
        "enabled",
        "intensify",
        "disableOthers",
        "angleOffset",
      ],
      SetFilter: {
        _filter: [
          "Grayscale",
          "Sepia",
          "Invert",
          "VHS",
          "EightiesTV",
          "FiftiesTV",
          "Arcade",
          "LED",
          "Rain",
          "Blizzard",
          "PixelSnow",
          "Compression",
          "Glitch",
          "Pixelate",
          "Wave",
          "Static",
          "Grain",
          "MotionBlur",
          "Fisheye",
          "Drawing",
          "Neon",
          "Handheld",
          "NightVision",
          "Funk",
          "Weird3D",
        ],
      },
      _HallOfMirrors: ["enabled", "angleOffset"],
      _ShakeScreen: [
        "duration",
        "strength",
        "intensity",
        "fadeOut",
        "angleOffset",
      ],
      _SetPlanetRotation: ["ease", "easeParts"],
      _MoveDecorations: [
        "duration",
        "tag",
        "positionOffset",
        "rotationOffset",
        "scale",
        "angleOffset",
      ],
      _RepeatEvents: ["repetitions", "interval"],
    },
    eventParameters: {
      _boolean: ["Enabled", "Disabled"],
      _ease: [
        "Linear",
        "InSine",
        "OutSine",
        "InOutSine",
        "InQuad",
        "OutQuad",
        "InOutQuad",
        "InCubic",
        "OutCubic",
        "InOutCubic",
        "InQuart",
        "OutQuart",
        "InOutQuart",
        "InQuint",
        "OutQuint",
        "InOutQuint",
        "InExpo",
        "OutExpo",
        "InOutExpo",
        "InCirc",
        "OutCirc",
        "InOutCirc",
        "InBack",
        "OutBack",
        "InOutBack",
        "InBounce",
        "OutBounce",
        "InOutBounce",
        "Flash",
        "InFlash",
        "OutFlash",
        "InOutFlash",
      ],
      _trackColorType: [
        "Single",
        "Striples",
        "Glow",
        "Blink",
        "Switch",
        "Rainbow",
      ],
      _trackColorPulse: ["None", "Forward", "Backward"],
      _trackStyle: ["Standard", "Neon", "NeonLight", "Gems"],
    },
  },
  _hexKeys: [
    "trackColor",
    "secondaryTrackColor",
    "backgroundColor",
    "bgImageColor",
    "color",
    "startColor",
    "endColor",
  ],
  _numberKeys: [
    "version",
    "bpm",
    "volume",
    "offset",
    "pitch",
    "hitsoundVolume",
    "trackColorAnimDuration",
    "trackPulseLength",
    "beatsAhead",
    "beatsBehind",
    "rotation",
    "zoom",
    "vidOffset",
    "planetEaseParts",
    "beatsPerMinute",
    "bpmMultiplier",
    "unscaledSize",
    "angleOffset",
    "rotation",
    "scale",
    "depth",
    "duration",
    "startOpacity",
    "endOpacity",
    "floor",
    "rotationOffset",
    "opacity",
    "intensity",
    "strength",
    "easeParts",
    "repetitions",
    "interval",
  ],
};
