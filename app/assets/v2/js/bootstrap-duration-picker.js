'use strict'; !function(t) {
  t.DurationPicker = function(n, s) {
    function a(t) {
      return c.settings.translations[t];
    } function i(t, n) {
      var s = 1 === t ? n.substring(0, n.length - 1) : n;

      v[n].text(a(s));
    } function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = p + 60 * y + 60 * m * 60 + 24 * g * 60 * 60;

      l.val(n), l.change(), i(g, 'days'), i(m, 'hours'), i(y, 'minutes'), i(p, 'seconds'), h.days.val(g), h.hours.val(m), h.minutes.val(y), h.seconds.val(p), 'function' == typeof c.settings.onChanged && c.settings.onChanged(l.val(), t);
    } function o() {
      g = parseInt(h.days.val(), 10) || 0, m = parseInt(h.hours.val(), 10) || 0, y = parseInt(h.minutes.val(), 10) || 0, p = parseInt(h.seconds.val(), 10) || 0, e();
    } function r(n, s, i) {
      var e = t('<input>', {'class': 'form-control input-sm', type: 'number', min: 0, value: 0, disabled: f}).change(o);

      i && e.attr('max', i), h[n] = e; var r = t('<div>', {id: 'bdp-' + n + '-label', text: a(n)});

      return v[n] = r, t('<div>', {'class': 'bdp-block ' + (s ? 'hidden' : ''), html: [ e, r ]});
    } function d(t, n) {
      l.val(t); var s = parseInt(t, 10);

      p = s % 60, s = Math.floor(s / 60), y = s % 60, s = Math.floor(s / 60), c.settings.showDays ? (m = s % 24, g = Math.floor(s / 24)) : (m = s, g = 0), e(n);
    } var u = {translations: {day: 'day', hour: 'hour', minute: 'minute', second: 'second', days: 'days', hours: 'hours', minutes: 'minutes', seconds: 'seconds'}, showSeconds: !1, showDays: !0},
        c = this;

    c.settings = {}; var l = t(n);

    c.init = function() {
      c.settings = t.extend({}, u, s); var n = t('<div>', {'class': 'bdp-input', html: [ r('days', !c.settings.showDays), r('hours', !1, c.settings.showDays ? 23 : 99999), r('minutes', !1, 59), r('seconds', !c.settings.showSeconds, 59) ]});

      l.after(n).hide(), '' === l.val() && l.val(0), d(l.val(), !0);
    }; var h = [],
        v = [],
        f = l.hasClass('disabled') || 'disabled' === l.attr('disabled'),
        g = 0,
        m = 0,
        y = 0,
        p = 0;

    c.setValue = function(t) {
      d(t, !0);
    }, c.destroy = function() {
      l.next('.bdp-input').remove(), l.data('durationPicker', null).show();
    }, c.init();
  }, t.fn.durationPicker = function(n) {
    return this.each(function() {
      if (void 0 === t(this).data('durationPicker')) {
        var s = new t.DurationPicker(this, n);

        t(this).data('durationPicker', s);
      }
    });
  };
}(jQuery);