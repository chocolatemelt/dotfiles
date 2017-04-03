
--[[
                                     
     Multicolor Awesome WM theme 2.0 
     github.com/copycat-killer       
                                     
--]]


local gears = require("gears")
local lain  = require("lain")
local awful = require("awful")
local wibox = require("wibox")
local os    = { getenv = os.getenv, setlocale = os.setlocale }

local theme                                     = {}
theme.confdir                                   = os.getenv("HOME") .. "/.config/awesome/themes/personal"
theme.wallpaper                                 = theme.confdir .. "/wall.png"
theme.font                                      = "lucy tewi 8"
theme.menu_bg_normal                            = "#000000"
theme.menu_bg_focus                             = "#000000"
theme.bg_normal                                 = "#000000"
theme.bg_focus                                  = "#000000"
theme.bg_urgent                                 = "#000000"
theme.fg_normal                                 = "#aaaaaa"
theme.fg_focus                                  = "#ff8c00"
theme.fg_urgent                                 = "#af1d18"
theme.fg_minimize                               = "#ffffff"
theme.border_width                              = 1
theme.border_normal                             = "#1c2022"
theme.border_focus                              = "#606060"
theme.border_marked                             = "#3ca4d8"
theme.menu_border_width                         = 0
theme.menu_width                                = 130
theme.menu_fg_normal                            = "#aaaaaa"
theme.menu_fg_focus                             = "#ff8c00"
theme.menu_bg_normal                            = "#050505dd"
theme.menu_bg_focus                             = "#050505dd"
theme.tasklist_plain_task_name                  = true
theme.tasklist_disable_icon                     = true
theme.useless_gap                               = 10
theme.taglist_squares_sel                       = theme.confdir .. "/icons/square_a.png"
theme.taglist_squares_unsel                     = theme.confdir .. "/icons/square_b.png"


local markup = lain.util.markup

-- Textclock
os.setlocale(os.getenv("LANG")) -- to localize the clock
local mytextclock = wibox.widget.textclock(markup(theme.fg_normal, "%a %d %b") .. " " .. markup(theme.fg_normal, "%H:%M "))
mytextclock.font = theme.font

-- Calendar
theme.cal = lain.widget.calendar({
    attach_to = { mytextclock },
    notification_preset = {
        font = "lucy tewi 8",
        fg   = theme.fg_normal,
        bg   = theme.bg_normal
    }
})

-- Weather
theme.weather = lain.widget.weather({
    city_id = 5141502, -- troy, ny
    notification_preset = { font = "lucy tewi 8", fg = theme.fg_normal },
    weather_na_markup = markup.fontfg(theme.font, "#eca4c4", "N/A "),
    settings = function()
        descr = weather_now["weather"][1]["description"]:lower()
        units = math.floor(weather_now["main"]["temp"])
        widget:set_markup(markup.fontfg(theme.font, theme.fg_normal, descr .. " @ " .. units .. "°C        "))
    end
})

-- / fs
theme.fs = lain.widget.fs({
    options = "--exclude-type=tmpfs",
    notification_preset = { font = "lucy tewi 8", fg = theme.fg_normal },
    settings  = function()
        widget:set_markup(markup.fontfg(theme.font, "#80d9d8", fs_now.used .. "%        "))
    end
})

-- CPU
local cpu = lain.widget.cpu({
    settings = function()
        widget:set_markup(markup.fontfg(theme.font, theme.fg_normal, "cpu " .. cpu_now.usage .. "%        "))
    end
})

-- Coretemp
local temp = lain.widget.temp({
    settings = function()
        widget:set_markup(markup.fontfg(theme.font, theme.fg_normal, "core " .. coretemp_now .. "°C        "))
    end
})

-- Battery
local bat = lain.widget.bat({
	  battery = "BAT*",
    settings = function()
				local perc  = bat_now.perc ~= "N/A" and bat_now.perc .. "%" or bat_now.perc
        if bat_now.ac_status == 1 then
            perc = perc .. " plug"
        end

				if bat_now.perc ~= "N/A" then
					widget:set_markup(markup.fontfg(theme.font, theme.fg_normal, "bat " .. perc .. "        "))
				end
    end
})

-- ALSA volume
theme.volume = lain.widget.alsa({
    settings = function()
        if volume_now.status == "off" then
            volume_now.level = volume_now.level .. "M"
        end

        widget:set_markup(markup.fontfg(theme.font, theme.fg_normal, "vol " .. volume_now.level .. "%        "))
    end
})

-- Net
local netdowninfo = wibox.widget.textbox()
local netupinfo = lain.widget.net({
    settings = function()
        if iface ~= "network off" and
           string.match(theme.weather.widget.text, "N/A")
        then
            theme.weather.update()
        end

        widget:set_markup(markup.fontfg(theme.font, theme.fg_normal, net_now.sent .. " up        "))
        netdowninfo:set_markup(markup.fontfg(theme.font, theme.fg_normal, net_now.received .. " down, "))
    end
})

-- MEM
local memory = lain.widget.mem({
    settings = function()
        widget:set_markup(markup.fontfg(theme.font, theme.fg_normal, "mem " .. mem_now.used .. "M        "))
    end
})

-- MPD
theme.mpd = lain.widget.mpd({
    music_dir = "/media/roe/Music",
		cover_size = 64,
    settings = function()
        mpd_notification_preset = {
        		font = "Ricty 13",
            text = string.format("%s\n%s // %s", mpd_now.title,
                   mpd_now.artist, mpd_now.album)
        }

        if mpd_now.state == "play" then
            artist = "        " .. mpd_now.artist .. " // "
            title  = mpd_now.title .. "         "
        elseif mpd_now.state == "pause" then
            artist = "         mpd "
            title  = "paused         "
        else
            artist = ""
            title  = ""
        end
        widget:set_markup(markup.fontfg(theme.font, theme.fg_normal, artist) .. markup.fontfg(theme.font, theme.fg_focus, title))
    end
})

function theme.at_screen_connect(s)
    -- Quake application
    s.quake = lain.util.quake({ app = awful.util.terminal })

    -- If wallpaper is a function, call it with the screen
    if type(theme.wallpaper) == "function" then
        theme.wallpaper = theme.wallpaper(s)
    end
    gears.wallpaper.maximized(theme.wallpaper, s, true)

    -- Tags
    awful.tag(awful.util.tagnames, s, awful.layout.layouts)

    -- Create a promptbox for each screen
    s.mypromptbox = awful.widget.prompt()

		-- Create a taglist widget
    s.mytaglist = awful.widget.taglist(s, awful.widget.taglist.filter.all, awful.util.taglist_buttons)

    -- Create a tasklist widget
    s.mytasklist = awful.widget.tasklist(s, awful.widget.tasklist.filter.currenttags, awful.util.tasklist_buttons)

    -- Create the wibox
    s.mywibox = awful.wibar({ position = "top", screen = s, height = 20, bg = theme.bg_normal, fg = theme.fg_normal })

    -- Add widgets to the wibox
    s.mywibox:setup {
        layout = wibox.layout.align.horizontal,
        { -- Left widgets
            layout = wibox.layout.fixed.horizontal,
            --s.mylayoutbox,
            s.mytaglist,
            theme.mpd.widget,
            s.mypromptbox,
        },
        --s.mytasklist, -- Middle widget
        nil,
        { -- Right widgets
            layout = wibox.layout.fixed.horizontal,
            -- wibox.widget.systray(), -- this has yet to come in handy for me and breaks the immersion
            theme.volume.widget,
            -- netdowninfo,
            -- netupinfo.widget,
            -- memory.widget,
            -- cpu.widget,
            -- theme.fs.widget,
            temp.widget,
            -- theme.weather.widget,
            bat.widget,
            mytextclock,
        },
    }

    -- -- Create the bottom wibox
    -- s.mybottomwibox = awful.wibar({ position = "bottom", screen = s, border_width = 0, height = 20, bg = theme.bg_normal, fg = theme.fg_normal })

    -- -- Add widgets to the bottom wibox
    -- s.mybottomwibox:setup {
    --     layout = wibox.layout.align.horizontal,
    --     { -- Left widgets
    --         layout = wibox.layout.fixed.horizontal,
    --     },
    --     s.mytasklist, -- Middle widget
    --     { -- Right widgets
    --         layout = wibox.layout.fixed.horizontal,
    --         -- s.mylayoutbox,
    --     },
    -- }
end

return theme
